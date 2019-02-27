import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item', // 앵귤러 스타일 가이드에 따라 수정
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit() {

  }
}
