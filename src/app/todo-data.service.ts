import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;

  todos:Todo[]=[
    { id: 1, userId: 'jk', text: 'testtodo1', completed: false },
    { id: 2, userId: 'jk', text: 'testtodo2', completed: false },
    { id: 3, userId: 'jk', text: 'testtodo3', completed: false },
    { id: 4, userId: 'jk', text: 'testtodo4', completed: true },
    { id: 5, userId: 'kk', text: 'testtodo5', completed: true }
  ];

  constructor() { }

  // Simulate POST /todos
  addTodo(todoTxt:string): TodoDataService {
    let id = ++this.lastId;
    this.todos.push({ id:id,userId:'dev',text:todoTxt,completed: false });
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos():Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Toggle todo complete
  toggleTodoComplete(id:number,todoTxt:string,complete:boolean) {
    let updatedTodo = this.updateTodoById(id, {
      complete: !complete
    });
    return updatedTodo;
  }
}