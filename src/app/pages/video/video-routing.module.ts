import {Route} from "@angular/router";
import {VideoComponent} from "./video.component";
import {VideoListComponent} from "./list/list.component";
import {VideoDetailComponent} from "./detail/detail.component";
import {VideoUploadComponent} from "./upload/upload.component";

const VideoSubRoute : Route = {
  path: 'video',
  title: '视频',
  component: VideoComponent,
  children: [
    {
      path: 'list',
      title: '列表',
      component: VideoListComponent
    },
    {
      path: 'detail/:id',
      title: '详情',
      component: VideoDetailComponent
      // https://netbasal.com/binding-router-information-to-routed-component-inputs-in-angular-78ee92f63e64
    },
    {
      path: 'upload',
      title: '上传',
      component: VideoUploadComponent
    },
  ]
}

export {VideoSubRoute}
