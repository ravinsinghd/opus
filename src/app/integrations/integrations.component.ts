import { Component, OnInit } from '@angular/core';
import { GoogleAPIService } from '../core/google-api';

@Component( {
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: [ './integrations.component.scss' ]
} )
export class IntegrationsComponent implements OnInit {

  isSignedIn = false;
  constructor( private googleAPIService: GoogleAPIService ) { }

  ngOnInit() {
    this.googleAPIService.googleSignInStatus.subscribe( status => this.isSignedIn = status );
  }

  signOut() {
    this.googleAPIService.signOut();
  }


  connect() {
    this.googleAPIService.connect();
  }

  getFiles() {
    this.googleAPIService.getFiles().subscribe( result => console.log( result ) );
  }

}
