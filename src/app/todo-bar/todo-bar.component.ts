import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-bar',
  templateUrl: './todo-bar.component.html',
  styleUrls: ['./todo-bar.component.css']
})
export class TodoBarComponent implements OnInit {
  todoToAdd: string;
  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() { }

  isValidTodo() {
    return this.todoToAdd.trim().length > 3;
  }

  addTodo() {
    if (this.isValidTodo()) {
      console.log(this.todoToAdd);
      this.todoDataService.addTodo(this.todoToAdd);
    } else {
      console.warn(`Invalid todo:${this.todoToAdd}`);
    }
  }
}