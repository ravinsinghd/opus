import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatToolbarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

@NgModule( {
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatGridListModule, MatCardModule,
    MatMenuModule, MatIconModule, MatButtonModule, LayoutModule, AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
