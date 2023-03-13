import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ENgxXGPlayerComponent } from './xgplayer.component';
import { ENgxXGPlayerModule } from './xgplayer.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ENgxXGPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
