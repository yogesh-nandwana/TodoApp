import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoDataService.getAllTodos().subscribe(response => {
      this.todos = response; 
      console.log(this.todos);
    });
  }

  onAddTodo(todoToAdd: string) {
    this.todoDataService.addTodo(todoToAdd).subscribe((response) => {
      console.log(response);
      this.todos.push(response);
    });;
  }

  onDeleteTodo(todoToDelete: Todo) { 
    //TODO: It does not delete newly added TODO's as they dont exist on typicode
    this.todoDataService.deleteTodoById(todoToDelete.id).subscribe(response => {
      console.log(response);
      this.todos = this.todos.filter(todo => todo.id !== todoToDelete.id);
    });
  }

  onToggleTodo(todoToUpdate: Todo) {
    this.todoDataService.updateTodoById(todoToUpdate.id, todoToUpdate);
  }
}