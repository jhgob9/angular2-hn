import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable'; angular7에서 사용 안됨, 필요하지 않음

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  items;

  // constructor(private _hackerNewsAPIService: HackerNewsAPIService) {} tslint의 권장으로 언더바 삭제
  constructor(private hackerNewsAPIService: HackerNewsAPIService) {}

  ngOnInit() {
    // this._hackerNewsAPIService.fetchStories() tslint의 권장으로 언더바 삭제
    this.hackerNewsAPIService.fetchStories()
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching stories'));
  }
}
