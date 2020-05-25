import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todosObj: any = { todos: [] };

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todosObj.todos = this.todoDataService.getAllTodos();
  }
}