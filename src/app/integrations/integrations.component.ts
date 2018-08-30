import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { GoogleAPIService } from '../core/google-api';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component( {
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: [ './integrations.component.scss' ]
} )
export class IntegrationsComponent implements OnInit {

  isSignedIn;
  currentUser: any = {};
  constructor( private googleAPIService: GoogleAPIService,
    private changeDetectorRef: ChangeDetectorRef ) {
  }

  ngOnInit() {
    const status$ = this.googleAPIService.googleSignInStatus.pipe( tap( status => this.isSignedIn = status ) );
    const user$ = this.googleAPIService.currentUser.pipe( tap( user => {
      const basicProfile = user.getBasicProfile();
      if ( user && basicProfile ) {
        this.currentUser.name = basicProfile.getName();
        this.currentUser.email = basicProfile.getEmail();
      } else {
        this.currentUser = {};
      }
    } ) );
    combineLatest( status$, user$ ).subscribe( () => this.changeDetectorRef.detectChanges() );
  }

  signOut() {
    this.googleAPIService.signOut();
  }


  connect() {
    this.googleAPIService.signIn();
  }

  getFiles() {
    this.googleAPIService.getFiles().subscribe( result => console.log( result ) );
  }

}
