import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoBarComponent } from './todo-bar/todo-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataService } from './todo-data.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        TodoBarComponent,
        TodoListComponent  
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'TodoApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.appTitle).toEqual('My Todo`s');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to TodoApp!');
  });
});
