declare const gapi: any;
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class GoogleAPIService {
  googleSignInStatus = new Subject<any>();
  currentUser = new Subject<any>();
  OPUSFolderPresented = new BehaviorSubject<boolean>( false );
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

  createFolder( folderName, parentID = null ) {
    const fileMetadata = {
      'name': folderName,
      'mimeType': 'application/vnd.google-apps.folder',
      'parents': parentID ? [ parentID ] : null
    };
    return new Observable( ( observer ) => {
      gapi.client.drive.files.create( { resource: fileMetadata, fields: 'id' } ).then( response => {
        observer.next( response.result.id );
      } );
    } );
  }

  getFoldersFromFolder( folderID ) {
    const fileMetadata = {
      'q': `'${ folderID }' in parents and mimeType = 'application/vnd.google-apps.folder'`
    };
    return new Observable( ( observer ) => {
      gapi.client.drive.files.list( fileMetadata ).then( response => {
        observer.next( response.result );
      } );
    } );
  }


}
