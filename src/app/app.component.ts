import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}