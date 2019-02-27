import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'; angular7에서 사용 안됨
// import { Observable } from 'rxjs/Observable'; angular7에서 사용 안됨
// import 'rxjs/add/operator/map'; 필요없음
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  fetchStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`);
    // .map(response => response.json()); 필요하지 않음
  }

  fetchItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`);
  }
}
