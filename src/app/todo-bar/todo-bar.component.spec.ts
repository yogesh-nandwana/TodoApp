import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBarComponent } from './todo-bar.component';
import { FormsModule } from '@angular/forms';

describe('TodoBarComponent', () => {
  let component: TodoBarComponent;
  let fixture: ComponentFixture<TodoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [ FormsModule ],
      declarations: [ TodoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
