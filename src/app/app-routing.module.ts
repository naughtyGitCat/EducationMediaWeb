import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { FirstComponent } from './first/first.component';
import { DetailComponent } from './modules/video/detail/detail.component';
import { ListComponent } from './modules/video/list/list.component';

const resolvedVideoDetailTitle: ResolveFn<string> = () => Promise.resolve('video detail');

const routes: Routes = [
  {path: 'first-component', component: FirstComponent, title: 'First Component'},
  {path: 'video-detail', component: VideoDetailComponent, title: 'Video Detail Component'},
  {path: '', redirectTo: '/first-component', pathMatch: 'full'},
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
  },
  {path: '**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
