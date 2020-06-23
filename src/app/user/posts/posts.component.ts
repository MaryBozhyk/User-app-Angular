import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Post } from '../models/post';
import { UserInformationService } from '../user-information.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private route: ActivatedRoute,
    private httpPosts: UserInformationService) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.posts$ = this.httpPosts.getPosts(id);
  }

}
