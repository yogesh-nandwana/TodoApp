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

@NgModule({
  declarations: [
    AppComponent,
    TodoBarComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoDataService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }