import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IntegrationsComponent } from './integrations/integrations.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'integrations',
    component: IntegrationsComponent
  }, {
    path: 'Images/:id',
    loadChildren: './images/images.module#ImagesModule'
  } ];


@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {

}
