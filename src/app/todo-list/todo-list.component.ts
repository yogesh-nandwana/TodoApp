import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';
import { todosObj } from 'src/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Todo[] = [];

  @Output()
  delete:EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggle:EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteTodo(todoToDelete: Todo) {
   this.delete.emit(todoToDelete);
  }

  toggleTodo(todo:Todo){
    todo.completed=!todo.completed
    this.toggle.emit(todo);
  }  

  findStyle(todo:Todo){
    if(todo.completed){
      return {color:'green','text-decoration':'line-through'};
    }else{
      return {color:'orange','text-decoration':'none'};
    }    
  }
}