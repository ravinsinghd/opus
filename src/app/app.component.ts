import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor( private breakpointObserver: BreakpointObserver,
    private googleAPIService: GoogleAPIService ) { }

  ngOnInit() {
    this.getSignStatus();
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
      }
    } );
  }

  createOPUSFolder() {
    const canCreate = confirm( 'Your drive dont have OPUS folder.Shall we create one for you?' );
    if ( canCreate ) {
      this.googleAPIService.createFolder( 'OPUS' ).subscribe( file => console.log( 'OPUS folder created' ) );
    } else {
      alert( 'Without OPUS folder app will not work as expected' );
    }

  }
}
