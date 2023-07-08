import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogPostViewComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatIconModule
  ]
})
export class BlogsModule { }
