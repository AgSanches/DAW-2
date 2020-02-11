import { Component } from '@angular/core';
import * as uuid from 'uuid';

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
        id: 0, action:"Estudiar daw", done: false, prioridad: 0
      } , {
        id: 1, action:"Estudiar daw", done: true,  prioridad: 0
      } , {
        id: 2, action:"Estudiar daw", done: false, prioridad: 0
      },
      {
        id: 3, action:"Estudiar daw", done: false, prioridad: 0
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
    this.model.items.push({action: action.value, done: false, id: uuid.v4(), prioridad: 0});
  }

  deleteTask(id: number) {
    this.model.items = this.model.items.filter( item => {
      return item.id != id;
    })
  }

  sortArray(){
    return this.model.items.sort( (a, b) => (b.prioridad - a.prioridad));
  }

}
