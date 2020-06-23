import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  userName: string;
  private userSubscription: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private httpUsers: UsersService) { }
  
  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.userSubscription = this.httpUsers.getUser(id).subscribe(
      user => this.userName = user['username'],
      err => this.router.navigate(['/error'])
    )
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
