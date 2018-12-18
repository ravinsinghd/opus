import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialImports } from './material-import';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app.routing.module';

import { GoogleAPIService } from './core/google-api';
import { SideNavService } from './side-nav.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntegrationsComponent } from './integrations/integrations.component';

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    IntegrationsComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ...materialImports,
    LayoutModule, AppRoutingModule
  ],
  providers: [ GoogleAPIService, SideNavService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
