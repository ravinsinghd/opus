declare const gapi: any;
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleAPIService {
  googleSignInStatus = new Subject<any>();
  googleAPIServiceInstance = this;
  constructor() { }

  connect() {
    gapi.load( 'client:auth2', () => this.signIn() );
  }

  signIn() {

    const DISCOVERY_DOCS = [ 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest' ];
    const config = {
      apiKey: environment.DRIVE_API_KEY,
      clientId: environment.DRIVE_CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: environment.DRIVE_SCOPE
    };
    gapi.client.init( config ).then( () => {
      gapi.auth2.getAuthInstance().signIn();
      this.signInStatus();
    } );
  }

  signOut() {
    gapi.auth2.getAuthInstance().signOut();
  }

  signInStatus() {
    gapi.auth2.getAuthInstance().isSignedIn.listen( ( status ) => this.googleSignInStatus.next( status ) );
    this.googleSignInStatus.next( gapi.auth2.getAuthInstance().isSignedIn.get() );
  }

}
