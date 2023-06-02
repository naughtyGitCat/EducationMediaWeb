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

  constructor(
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name=params['name']
    })
  }
}
