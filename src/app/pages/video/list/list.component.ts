import { Component } from '@angular/core';
import {Router} from "@angular/router";

const rows : VideoInfo[] = [
  { id: 1, name: 'mysql高可用', durationSeconds: 300, createBy:'zrz', createTime: new Date(), updateBy: 'zrz'}
]

@Component({
  selector: 'app-video-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class VideoListComponent {
  constructor(private  router: Router) {
  }
  displayedColumns: string[]=['id','name', 'durationSeconds','createBy','createTime','updateBy']
  dataSource = rows
  gotoDetail: Function = (row: VideoInfo) => {
    console.log('[VideoListComponent.gotoDetail]', row)
    this.router.navigateByUrl(`/video/detail/${row.id}`)
  }
}
