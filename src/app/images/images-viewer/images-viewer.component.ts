import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

import { GoogleAPIService } from '../../core/google-api';

@Component( {
  selector: 'app-images-viewer',
  templateUrl: './images-viewer.component.html',
  styleUrls: [ './images-viewer.component.css' ]
} )
export class ImagesViewerComponent implements OnInit {
  images = [];
  constructor( private router: Router, private activatedRoute: ActivatedRoute,
    private googleAPIService: GoogleAPIService ) { }

  ngOnInit() {
    const params$ = this.activatedRoute.params.pipe( map( params => params[ 'id' ] ) );
    const googleAPIReady$ = this.googleAPIService.googleAPIReady;
    combineLatest( params$, googleAPIReady$ ).subscribe( result => this.getImages( result ) );
  }

  getImages( [ folderID, isAPIReady ] ) {
    if ( folderID && isAPIReady ) {
      this.googleAPIService.getImagesFromFolder( folderID ).subscribe( ( responses: any ) => {
        this.images = responses.files;
      } );
    }
  }

}
