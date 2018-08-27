import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { defaultCollection } from './default-collection';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit {
  cardPerRow = 6;
  homeImageCollection = defaultCollection;
  currentViewImage;
  constructor( private breakpointObserver: BreakpointObserver ) { }

  ngOnInit() {
    this.layoutObserver();
  }

  layoutObserver() {
    this.breakpointObserver.observe( Breakpoints.Handset ).subscribe( ( { matches } ) => {
      if ( matches ) {
        this.cardPerRow = 1;
      }
    } );
  }

  viewImage( category, image ) {
    this.currentViewImage = `./assets/default-collection/${ category }/original/${ image }`;
  }

  closeImageView() {
    this.currentViewImage = null;
  }

}
