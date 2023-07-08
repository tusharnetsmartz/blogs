import { Component, OnInit } from '@angular/core';
import { IBlogPostApiModel } from '../shared/model/post-api-model';
import { SharedService } from '../shared/service/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {
  blogPost:IBlogPostApiModel[] = []
  subscription: Subscription;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getBlogPosts() {
    this.subscription = this.sharedService.getBlogPosts().subscribe({
     next:(res) => {
       this.blogPost = res;
     }
    })
  }

}
