import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoDataService.getAllTodos().subscribe(response => this.todos = response);
  }

  deleteTodo(todoToDelete: Todo) {
    this.todoDataService.deleteTodoById(todoToDelete.id).subscribe(response => {
      console.log(response);
      this.todos = this.todos.filter(todo => todo.id !== todoToDelete.id);
    });
  }
}