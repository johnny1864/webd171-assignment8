import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  todos: any = [
    {
      task: 'Do Homework',
      rating: 3,
      is_done: false
    },
    {
      task: 'finish powerpoint presentation',
      rating: 2,
      is_done: false
    },
    {
      task: 'Go to gorcery store',
      rating: 5,
      is_done: false
    }
  ];
  constructor() {}
}
