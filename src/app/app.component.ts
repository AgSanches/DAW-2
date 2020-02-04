import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Todo List';
  model = {
    user: "Daw",
    items: [
      {
        action:"Estudiar daw", done: false
      } , {
        action:"Estudiar 2", done: true
      } , {
        action:"Estudiar 3", done: false
      },
      {
        action:"Estudiar 4", done: false
      },
    ]
  };
}
