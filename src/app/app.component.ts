import { Component } from '@angular/core';
import { XGPlayerOptions } from './xgplayer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EducationMediaWeb';
  playerOptions = {url: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4"};
}
