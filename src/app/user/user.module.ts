import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PhotosComponent } from './albums/photos/photos.component';
import { CommentsComponent } from './posts/comments/comments.component';

import { UserRoutingModule } from './user-routing.module';
import { BackButtonDirective } from './back-button.directive';


@NgModule({
  declarations: [
    UserComponent,
    AlbumsComponent,
    PostsComponent,
    TodosComponent,
    PhotosComponent,
    CommentsComponent,
    UserDetailsComponent,
    BackButtonDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
