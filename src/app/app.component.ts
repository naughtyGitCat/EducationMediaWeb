import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { XGPlayerOptions } from './modules/xgplayer/xgplayer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name?: string;
  title = 'EducationMediaWeb';
  playerOptions = {url: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4"};

  constructor(
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name=params['name']
    })
  }
}
