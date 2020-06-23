import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Album } from './models/albums';
import { Photo } from './models/photo';
import { Post } from './models/post';
import { Comment } from './models/comment';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root',
})

export class UserInformationService {
  url: string = 'http://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  getAlbums(id: string): Observable<Album[]> {
    return this.http.get<Album[]>(this.url + 'albums').pipe(
      map(album => album.filter(item => item.userId === +id))
    )
  }

  getPhotos(id: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url + 'photos').pipe(
      map(photo => photo.filter(item => item.albumId === +id))
    )
  }

  getPosts(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'posts').pipe(
      map(post => post.filter(item => item.userId === +id))
    )
  }

  getComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + 'comments').pipe(
      map(comment => comment.filter(item => item.postId === +id))
    )
  }

  getTodos(id: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url + 'todos').pipe(
      map(todo => todo.filter(item => item.userId === +id))
    )
  }

}

