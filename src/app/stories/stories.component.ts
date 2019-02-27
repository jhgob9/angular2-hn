import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable'; angular7에서 사용 안됨, 필요하지 않음
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  typeSub: any;
  pageSub: any;
  items;
  storiesType;
  pageNum: number;
  listStart: number;

  // constructor(private _hackerNewsAPIService: HackerNewsAPIService) {} tslint의 권장으로 언더바 삭제
  constructor(
    private hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.typeSub = this.route
      .data
      .subscribe(data => this.storiesType = (data as any).storiesType);
    this.pageSub = this.route.params.subscribe(params => {
      // this.pageNum = +params['page'] ? +params['page'] : 1;
      this.pageNum = +params.page ? +params.page : 1;
      this.hackerNewsAPIService.fetchStories(this.storiesType, this.pageNum)
                              .subscribe(
                                items => this.items = items,
                                error => console.log('Error fetching' + this.storiesType + 'stories'),
                                () => this.listStart = ((this.pageNum - 1) * 30) + 1);
    });
  }
}
