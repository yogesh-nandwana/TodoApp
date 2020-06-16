import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { ApiService } from './api.service';
import { TODOS } from '../model/mock-todos';
import { Observable } from 'rxjs';
import { todosObj } from '../model/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todos: Todo[] = TODOS;

  constructor(private apiService: ApiService) {}

  addTodo(newTodo: Todo):Observable<Todo> {   
    return this.apiService.createTodo(newTodo);
  }

  deleteTodoById(id: number): Observable<null> {
    return this.apiService.deleteTodo(id);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.apiService.getTodos();
  }

  getTodoById(id: number): Todo {
    let todo = null;
    this.apiService.getTodo(id).subscribe((response) => {
      console.log(response);
      todo = this.todos.filter(todo => todo.id === id).pop();
    });
    return todo;
  }

  updateTodoById(id: number, todoWithUpdates: Object = {}) {
    let todo = this.getTodoById(id);
    if (todo) {
      this.apiService.updateTodo(todo).subscribe((response) => {
        console.log(response);
        Object.assign(todo, todoWithUpdates);
      });
    } else {
      console.warn("No todo found with id:" + id);
    }
  }

  toggleTodoComplete(id: number, todoTxt: string, complete: boolean) {
    let updatedTodo = this.updateTodoById(id, { complete: !complete });
    return updatedTodo;
  }
}