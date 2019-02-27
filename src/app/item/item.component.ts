import { Component, Input, OnInit } from '@angular/core';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;

  // constructor(private _hackerNewsAPIService: HackerNewsAPIService) {} tslint의 권장으로 언더바 삭제
  constructor(private hackerNewsAPIService: HackerNewsAPIService) {}

  ngOnInit() {
    this.hackerNewsAPIService.fetchItem(this.itemID).subscribe(
      data => this.item = data,
      error => console.log('Could not load item' + this.itemID));
  }

}
