import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Todo } from '../models/todo';
import { UserInformationService } from '../user-information.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(    
    private httpTodos: UserInformationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todos$ = this.route.paramMap.pipe(
      switchMap ( params => {
        let id = params.get('id');
        return this.httpTodos.getTodos(id);
      }       
      )
    )
  }

}
