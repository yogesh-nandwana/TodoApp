import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;

  todosObj: any = {
    todos:
    [
      { id: 1, userId: 'jk', text: 'meeting@10am', completed: false },
      { id: 2, userId: 'jk', text: 'collect test report', completed: false },
      { id: 3, userId: 'jk', text: 'pay bill', completed: false },
      { id: 4, userId: 'jk', text: 'Check with Ryan', completed: true },
      { id: 5, userId: 'kk', text: 'Visit bank', completed: true }
    ]
  };

  constructor() { }

  // Simulate POST /todos
  addTodo(todoTxt): TodoDataService {
    let id = ++this.lastId;
    this.todosObj.todos.push({ id:id,userId:'dev',text:todoTxt,completed: false });
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todosObj.todos = this.todosObj.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Object {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos():Object {
    return this.todosObj.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Object {
    return this.todosObj.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(id,todoTxt,complete) {
    let updatedTodo = this.updateTodoById(id, {
      complete: !complete
    });
    return updatedTodo;
  }
}