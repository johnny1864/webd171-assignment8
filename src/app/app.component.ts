import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: any[];

  constructor(private _todos: ProductsService) {
    this.todos = _todos.todos;
  }

  isCompleted(i) {
    console.log(i);
    if (this.todos[i].completed) {
      return ['completed'];
    }
  }

  toggleComplete(i) {
    this.todos[i].completed = !this.todos[i].completed;
  }

  addTodo(todo) {
    this._todos.todos.push({
      task: todo,
      rating: 5,
      is_done: false
    });
  }
}
