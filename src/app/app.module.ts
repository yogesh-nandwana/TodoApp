import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoBarComponent } from './components/todo-bar/todo-bar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDataService } from './services/todo-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { AboutComponent } from './components/todo-about/todo-about.component';
import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoBarComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    AboutComponent,
    TodosComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TodoDataService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }