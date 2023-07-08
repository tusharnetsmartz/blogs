import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/service/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Blogs';
  isUserLoggedIn: boolean = false;
  blogPost:string[];
  username:string;
  loginSubscription: Subscription;
  getBlogsSubscription: Subscription;

  constructor(private sharedService: SharedService){
    this.sharedService.userLoggedIn();
    this.loginSubscription = this.sharedService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
    });
  }

  ngOnInit(): void {
    this.getBlogPosts();
    this.username = localStorage.getItem('userName');
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
    this.getBlogsSubscription.unsubscribe();
  }

  getBlogPosts() {
    this.getBlogsSubscription = this.sharedService.getBlogPosts().subscribe({
     next:(res) => {
       this.blogPost = res?.map(x=>x.title)?.slice(0, 10);
     }
    });
  }
}
