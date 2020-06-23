import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PhotosComponent } from './albums/photos/photos.component';
import { CommentsComponent } from './posts/comments/comments.component';

const routes: Routes = [
  { path: ':id', component: UserComponent, 
  children: [
    { path: 'albums', 
    children: [
      { path: 'photos', component: PhotosComponent },
      { path: '', component: AlbumsComponent }
    ] },
    { path: 'posts',
    children: [
      { path: 'comments', component: CommentsComponent },
      { path: '', component: PostsComponent }
    ] },
    { path: 'todos', component: TodosComponent },
    { path: '', component: UserDetailsComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
