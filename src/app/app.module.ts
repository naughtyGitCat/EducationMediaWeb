import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ENgxXGPlayerModule } from './modules/xgplayer/xgplayer.module';
import { FirstComponent } from './first/first.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    VideoDetailComponent,
    PageNotFoundComponent
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
