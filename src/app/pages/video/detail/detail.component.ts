import { Component } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class VideoDetailComponent {
  playerOptions = {url: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4"};
}
