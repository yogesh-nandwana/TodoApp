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

  ngOnInit() {}

  isInvalidTodo(){
    return this.todoToAdd.trim().length>3;
  }

  addTodo() {
    if(this.isInvalidTodo()){
      console.log(this.todoToAdd);
      this.todoDataService.addTodo(this.todoToAdd);
    }else{
      console.warn(`Invalid todo:${this.todoToAdd}`);
    }    
  }  
}