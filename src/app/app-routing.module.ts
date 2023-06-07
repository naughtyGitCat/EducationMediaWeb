import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FirstComponent } from './first/first.component';
import { DetailComponent } from './modules/video/detail/detail.component';
import { ListComponent } from './modules/video/list/list.component';
import {VideoSubRoute} from "./pages/video/video-routing.module";

const resolvedVideoDetailTitle: ResolveFn<string> = () => Promise.resolve('video detail');

const routes: Routes = [
  {path: 'first-component', component: FirstComponent, title: 'First Component'},
  {path: '', redirectTo: '/first-component', pathMatch: 'full'},
  VideoSubRoute,
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
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
