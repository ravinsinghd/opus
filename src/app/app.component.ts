import { Component } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { GoogleAPIService } from './core/google-api';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe( Breakpoints.Handset ).pipe( map( result => result.matches ) );
  title = 'opus';
  opusFolderAvailable = false;
  navigation = [];
  constructor( private breakpointObserver: BreakpointObserver,
    private googleAPIService: GoogleAPIService ) { }

  ngOnInit() {
    this.getSignStatus();
    this.googleAPIService.OPUSFolderPresented.subscribe( opusStatus => this.opusFolderAvailable = opusStatus );
  }

  getSignStatus() {
    this.googleAPIService.googleSignInStatus.subscribe( status => {
      if ( status ) {
        this.getOPUSFolder();
      }
    } );
  }

  getOPUSFolder() {
    this.googleAPIService.getOPUSFolder().subscribe( ( response: any ) => {
      const files = response.result.files;
      if ( files.length === 0 ) {
        this.createOPUSFolder();
      } else {
        this.googleAPIService.OPUSFolderPresented.next( true );
        const opusFolder = files[ 0 ];
        this.getFirstLevelNavigation( opusFolder.id );
      }
    } );
  }

  createOPUSFolder() {
    const canCreate = confirm( 'Your drive dont have OPUS folder.Shall we create one for you?' );
    if ( canCreate ) {
      this.googleAPIService.createFolder( 'OPUS' ).subscribe( fileID => {
        const images$ = this.googleAPIService.createFolder( 'Images', fileID );
        const firstThen$ = this.googleAPIService.createFolder( 'FirstAndThen', fileID );
        const flow$ = this.googleAPIService.createFolder( 'Flow', fileID );
        zip( images$, firstThen$, flow$ ).subscribe( ( [ fileIDs ] ) => console.log( 'OPUS folder setup complete' ) );
      } );
    } else {
      alert( 'Without OPUS folder app will not work as expected' );
    }

  }

  getFirstLevelNavigation( folderID ) {
    const allowedNavigation = [ 'Flow', 'Images', 'FirstAndThen' ];
    this.googleAPIService.getFoldersFromFolder( folderID ).subscribe( ( response: any ) => {
      const firstLevelNavigation = response.files.filter( file => allowedNavigation.indexOf( file.name ) !== -1 );
      this.getSecondLevelNavigation( firstLevelNavigation );
    } );
  }

  getSecondLevelNavigation( firstLevelNavigation ) {
    const secondLevelRequest = firstLevelNavigation.map( navigation => this.googleAPIService.getFoldersFromFolder( navigation.id ) );
    zip( ...secondLevelRequest ).subscribe( subFolders => {
      this.navigation = subFolders.map( ( folders: any, i ) => {
        firstLevelNavigation[ i ].secondLevelNavigation = folders.files;
        return firstLevelNavigation[ i ];
      } );
    } );
  }
}
