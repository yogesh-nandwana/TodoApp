import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todosObj =
    {
        todos:
            [
                { id: 1, userId: 'jk', text: 'meeting@10am', startTime: '', completed: false }, 
                { id: 2, userId: 'jk', text: 'collect test report', completed: false }, 
                { id: 3, userId: 'jk', text: 'pay bill', completed: false }, 
                { id: 4, userId: 'jk', text: 'Check with Ryan', completed: true },
                { id: 1, userId: 'kk', text: 'Visit bank', completed: true }
            ]
    };
    
  constructor() { }

  ngOnInit() {
  }

}
