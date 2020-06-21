import { Todo } from '../model/todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo(1,"jk","test")).toBeTruthy();
  });
});
