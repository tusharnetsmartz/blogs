import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBlogPostApiModel } from 'src/app/shared/model/post-api-model';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.sass']
})
export class BlogPostViewComponent implements OnInit {
  blogPost: IBlogPostApiModel[] = []
  isExpanded: boolean = false;
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
      next: (res) => {
        this.blogPost = res;
        this.blogPost[0].body = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut';
        this.blogPost[1].body = 'quia et suscipit\nsuscipit recusandae consequuntur';
        this.blogPost[5].body = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut';
        this.blogPost[9].body = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut';
        this.blogPost.forEach((post) => {
          post.isExpanded = false;
        })
      }
    })
    
  }

  togglePost(post: IBlogPostApiModel): void {
    post.isExpanded = !post.isExpanded;
    this.isExpanded = !this.isExpanded;
  }

}
