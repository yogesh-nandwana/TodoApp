import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-todo-bar',
  templateUrl: './todo-bar.component.html',
  styleUrls: ['./todo-bar.component.css']
})
export class TodoBarComponent implements OnInit {
  todoToAdd:string;
  constructor() {}

  ngOnInit() {}

  addTodo(todo){    
      console.log(this.todoToAdd);
  }
}