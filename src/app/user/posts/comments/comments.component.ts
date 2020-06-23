import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserInformationService } from '../../user-information.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments$: Observable<Comment[]>;
  postName: string;

  constructor(
    private route: ActivatedRoute,
    private httpComments: UserInformationService
  ) { }

  ngOnInit(): void {
    this.comments$ = this.route.paramMap.pipe(
      switchMap(params => {
        let postId = params.get('postId');
        this.postName = params.get('postName');
        return this.httpComments.getComments(postId);
      })
    );
  }

}
