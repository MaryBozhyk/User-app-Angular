import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'users');
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(this.url + 'users/' + userId);
  }

}
