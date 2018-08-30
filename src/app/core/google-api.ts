declare const gapi: any;
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleAPIService {
  googleSignInStatus = new Subject<any>();
  currentUser = new Subject<any>();
  googleAPIServiceInstance = this;
  constructor() {
    gapi.load( 'client:auth2', () => this.connectDiscoveryAPI() );
  }

  connectDiscoveryAPI() {
    const DISCOVERY_DOCS = [ 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest' ];
    const config = {
      apiKey: environment.DRIVE_API_KEY,
      clientId: environment.DRIVE_CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: environment.DRIVE_SCOPE
    };
    gapi.client.init( config ).then( () => {
      console.log( 'Discovery API loaded' );
      this.updateProperties();
    } );
  }

  signIn() {
    gapi.auth2.getAuthInstance().signIn();
    this.updateProperties();
  }

  signOut() {
    gapi.auth2.getAuthInstance().signOut();
    this.updateProperties();
  }

  updateProperties() {
    this.updateSignInStatus();
    this.updateCurrentUser();
  }

  updateSignInStatus() {
    this.googleSignInStatus.next( this.getSignedStatus() );
  }

  updateCurrentUser() {
    this.currentUser.next( this.getCurrentUser() );
  }

  getFiles() {
    return new Observable( ( observer ) => {
      gapi.client.drive.files.list( { 'fields': 'nextPageToken, files(id, name)' } ).then( result => observer.next( result ) );
    } );
  }

  getSignedStatus() {
    return gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  getCurrentUser() {
    return gapi.auth2.getAuthInstance().currentUser.get();
  }

  getOPUSFolder() {
    return new Observable( ( observer ) => {
      gapi.client.drive.files.list( { q: 'mimeType="application/vnd.google-apps.folder" and name = "OPUS"' } ).then( result => {
        observer.next( result );
      } );
    } );
  }

  createFolder( folderName ) {
    const fileMetadata = {
      'name': folderName,
      'mimeType': 'application/vnd.google-apps.folder'
    };
    return new Observable( ( observer ) => {
      gapi.client.drive.files.create( { resource: fileMetadata, fields: 'id' } ).then( file => {
        observer.next( file.id );
      } );
    } );
  }
}
