import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo [] = [];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todos = this.todoDataService.getAllTodos();
  }
}