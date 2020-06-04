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
    this.todoDataService.getAllTodos().subscribe(data => this.todos = data);
  }

  deleteTodo(todoToDelete: Todo) {
    this.todoDataService.deleteTodoById(todoToDelete.id).subscribe(data => {
      console.log(data);
      this.todos = this.todos.filter(todo => {
        if (todo.id != todoToDelete.id) {
          return todo;
        }
      });
    });
  }
}