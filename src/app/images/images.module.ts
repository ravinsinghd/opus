import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { materialImports } from '../material-import';
import { ImagesRoutingModule } from './images.routing.module';

import { ImagesViewerComponent } from './images-viewer/images-viewer.component';

@NgModule( {
  imports: [
    CommonModule,
    ImagesRoutingModule,
    materialImports
  ],
  declarations: [ ImagesViewerComponent ]
} )
export class ImagesModule { }
