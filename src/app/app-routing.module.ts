import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FirstComponent } from './first/first.component';
import { DetailComponent } from './modules/video/detail/detail.component';
import { ListComponent } from './modules/video/list/list.component';
import {VideoDetailComponent} from "./pages/video/detail/detail.component";
import {VideoListComponent} from "./pages/video/list/list.component";
import {VideoUploadComponent} from "./pages/video/upload/upload.component";

const resolvedVideoDetailTitle: ResolveFn<string> = () => Promise.resolve('video detail');

const routes: Routes = [
  {path: 'first-component', component: FirstComponent, title: 'First Component'},
  {path: '', redirectTo: '/first-component', pathMatch: 'full'},
  {
    path: 'video',
    title: '视频',
    children: [
      {
        path: 'list',
        title: '列表',
        component: VideoListComponent
      },
      {
        path: 'detail',
        title: '详情',
        component: VideoDetailComponent
      },
      {
        path: 'upload',
        title: '上传',
        component: VideoUploadComponent
      },
    ]
  },
  {
    path: 'user',
    title: 'user component',
    children: [
      {
        path: 'list',
        title: 'user list',
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
