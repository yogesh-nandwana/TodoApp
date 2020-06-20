import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/todo-about/todo-about.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: TodosComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }