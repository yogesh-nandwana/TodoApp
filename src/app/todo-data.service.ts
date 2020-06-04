import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const REST_URL = "https://my-json-server.typicode.com/yogesh-nandwana/TodoApp/todos";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
 
  lastId: number = 0;

  todos:Todo[]=[
    { id: 1, userId: 'dev', text: 'TestTodo-1', completed: false },
    { id: 2, userId: 'dev', text: 'TestTodo-2', completed: false },
    { id: 3, userId: 'dev', text: 'TestTodo-3', completed: false },
    { id: 4, userId: 'dev', text: 'TestTodo-4', completed: true },
    { id: 5, userId: 'dev', text: 'TestTodo-5', completed: true }
  ];

  constructor(private http:HttpClient) { }

  // Simulate POST /todos
  addTodo(todoTxt:string): TodoDataService {
    let id = ++this.lastId;
    this.todos.push({id:id,userId:'jk',text:todoTxt,completed:false});
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number):Observable<null> {
    let endPoint = "/"+id;
    return this.http.delete<null>(REST_URL+endPoint);
    //this.todos = this.todos.filter(todo => todo.id !== id);
    //return this;
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
  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(REST_URL);
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