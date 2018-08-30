import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImagesViewerComponent } from './images-viewer/images-viewer.component';

const routes: Routes = [ {
  path: '',
  component: ImagesViewerComponent
} ];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class ImagesRoutingModule {

}
