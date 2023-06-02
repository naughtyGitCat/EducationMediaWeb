import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ENgxXGPlayerModule } from './modules/xgplayer/xgplayer.module';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './pages/user/user.component';
import {MatIconModule} from "@angular/material/icon";
import { VideoComponent } from './pages/video/video.component';
import {VideoDetailComponent} from './pages/video/detail/detail.component';
import { VideoListComponent } from './pages/video/list/list.component';
import { VideoUploadComponent } from './pages/video/upload/upload.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PageNotFoundComponent,
    UserComponent,
    VideoComponent,
    VideoListComponent,
    VideoDetailComponent,
    VideoUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ENgxXGPlayerModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
