import { Injectable } from '@angular/core';
import { SharedHttpService } from './shared-http.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IBlogPostApiModel } from '../model/post-api-model';
import { IHomeSummaryApiModel } from '../model/home-summary-api-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public searchText: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(
    private sharedHttpService: SharedHttpService
  ) { }

  public setSearchTextValue(searchValue: string) {
    this.searchText.next(searchValue);
  }

  getBlogPosts(): Observable<IBlogPostApiModel[]> {
    return this.sharedHttpService.getBlogPostApi();
  }

  getUsersList(): Observable<any> {
    return this.sharedHttpService.getUsersApi();
  }

  getHomeHeaderData(): Observable<IHomeSummaryApiModel[]> {
    return this.sharedHttpService.getHomeHeaderDataApi();
  }

  userLoggedIn(): void {
    if(localStorage.getItem('token')!== null){
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
  }
}
