import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoBarComponent } from '../../components/todo-bar/todo-bar.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import {TodoDataService} from '../../services/todo-data.service';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoBarComponent,TodosComponent,TodoListComponent,TodoDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
