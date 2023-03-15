import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { FirstComponent } from './first/first.component';
import { DetailComponent } from './modules/video/detail/detail.component';
import { ListComponent } from './modules/video/list/list.component';

const resolvedVideoDetailTitle: ResolveFn<string> = () => Promise.resolve('video detail');

const routes: Routes = [
  {path: 'first-component', component: FirstComponent, title: 'First Component'},
  {path: 'video-detail', component: VideoDetailComponent, title: 'Video Detail Component'},
  // {path: 'video/**', component: VideoDetailComponent, title: 'Video Wildcard Component'},
  // {path: '', component: FirstComponent, pathMatch: 'full'},
  {
    path: 'user',
    component: FirstComponent,
    title: 'user component',
    children: [
      {
        path: 'list',
        title: 'video list',
        component: ListComponent
      },
      {
        path: 'detail',
        title: resolvedVideoDetailTitle,
        component: DetailComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
