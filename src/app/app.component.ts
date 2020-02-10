import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'Todo List';

  model = {
    user: "Daw",
    items: [
      {
        id: 0, action:"Estudiar daw", done: false
      } , {
        id: 1, action:"Estudiar 2", done: true
      } , {
        id: 2, action:"Estudiar 3", done: false
      },
      {
        id: 3, action:"Estudiar 4", done: false
      },
    ]
  };

  completeTask () {
    let completeTaskCount = 0 ;
    this.model.items.forEach(item => {
      item.done ? completeTaskCount++:'';
    });
    return completeTaskCount;
  }

  addItem (action){
    this.model.items.push({action: action.value, done: false, id:5})
  }
}
