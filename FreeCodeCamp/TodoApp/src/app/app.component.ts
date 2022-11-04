import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TodoApp';

  todoArray = ['casa'];

  addTodo(value: any) {
    this.todoArray.push(value);
    console.log();
  }

  deleteItem(value: any) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (value == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
}
