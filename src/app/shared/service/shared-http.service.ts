import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IBlogPostApiModel } from '../model/post-api-model';
import { IHomeSummaryApiModel } from '../model/home-summary-api-model';

@Injectable({
  providedIn: 'root'
})
export class SharedHttpService {

  url = 'https://jsonplaceholder.typicode.com';

  homecardData: IHomeSummaryApiModel[] = 
    [{
      "total": 365,
      "description": "Total Orderes"
    },
    {
      "total": 365,
      "description": "Total Expenses"
    },
    {
      "total": 365,
      "description": "Total Revenue"
    },
    {
      "total": 365,
      "description": "New Users"
    },
  ]

  constructor(
    private httpClient: HttpClient
  ) { }

  getBlogPostApi(): Observable<IBlogPostApiModel[]> {
    return this.httpClient.get<IBlogPostApiModel[]>(this.url + '/posts');
  }

  getUsersApi(): Observable<any> {
    return this.httpClient.get(this.url + '/users');
  }

  getHomeHeaderDataApi(): Observable<IHomeSummaryApiModel[]> {
    return of(this.homecardData);
  }
}
