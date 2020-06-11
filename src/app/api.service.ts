import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

//const REST_URL = "https://my-json-server.typicode.com/yogesh-nandwana/TodoApp/todos";
const REST_URL = "http://localhost:3000/todos";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<null>(REST_URL, newTodo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(REST_URL, todo);
  }

  getTodo(id: number): Observable<Todo> {
    let endPoint = "/" + id;
    return this.http.get<Todo>(REST_URL + endPoint);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(REST_URL);
  }

  deleteTodo(id: number): Observable<null> {
    let endPoint = "/" + id;
    return this.http.delete<null>(REST_URL + endPoint);
  }
}