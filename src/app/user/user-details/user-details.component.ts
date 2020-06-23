import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { UsersService } from '../../users.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;
  constructor(private route: ActivatedRoute, private httpUsers: UsersService) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.user$ = this.httpUsers.getUser(id)
    .pipe(take(1), filter(user => user !== null))
  }

}
