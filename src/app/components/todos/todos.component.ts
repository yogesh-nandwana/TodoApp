import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoDataService.getAllTodos().subscribe(response => {
      this.todos = response;       
    });
  }

  onAddTodo(todoToAdd: string) {
    let newTodoId = this.determineNewTodoId();
    let newTodo = new Todo(newTodoId,'jk',todoToAdd);
    console.log("newTodo:",newTodo);

    this.todoDataService.addTodo(newTodo).subscribe((response) => {
      console.log(response);
      this.todos.push(response);
    });
  }

  determineNewTodoId():number {
    let lastTodo  = this.todos[this.todos.length-1];
    return lastTodo.id+1;
  }

  onDeleteTodo(todoToDelete: Todo) { 
      this.todoDataService.deleteTodoById(todoToDelete.id).subscribe(response => {
      console.log(response);
      this.todos = this.todos.filter(todo => todo.id !== todoToDelete.id);
    });
  }

  onToggleTodo(todoToUpdate: Todo) {
    todoToUpdate.completed = !todoToUpdate.completed;
    if(todoToUpdate.completed){
      todoToUpdate.completedOn = Date.now();
    }else if(todoToUpdate.completedOn){
      todoToUpdate.completedOn = null;
    }
    this.todoDataService.toggleTodoComplete(todoToUpdate);
  }
}