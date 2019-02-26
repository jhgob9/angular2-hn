import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  items: any;

  constructor(private hackerNewsAPIService: HackerNewsAPIService) {}

  ngOnInit() {
    this.hackerNewsAPIService.fetchStories()
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching stories'));
  }
}
