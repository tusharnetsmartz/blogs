import { Component, OnInit } from '@angular/core';
import { IBlogPostApiModel } from 'src/app/shared/model/post-api-model';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-home-blog-list',
  templateUrl: './home-blog-list.component.html',
  styleUrls: ['./home-blog-list.component.sass']
})
export class HomeBlogListComponent implements OnInit {
 
  blogPost: IBlogPostApiModel[] = [];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }
 
  getBlogPosts() {
    this.sharedService.getBlogPosts().subscribe({
     next:(res) => {
       this.blogPost = res;
     }
    })
 }
}
