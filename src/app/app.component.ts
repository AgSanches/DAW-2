import { Component } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'Todo List';
  ascendent: boolean;
  sortByName:boolean;
  model = {
    user: "Usuario1",
    items: [
      { id: 0, action:"a1", done: false, prioridad: 1 },
      { id: 1, action:"b", done: true,  prioridad: 2 },
      { id: 2, action:"Estudiar daw", done: false, prioridad: 3 },
      { id: 3, action:"Estudiar daw", done: true, prioridad: 4 },
    ]
  };

  constructor() {
    this.sortArrayByName();
  }

  /**
   * Sort
   */

  sortArrayByName(ascendent: boolean = true){
    this.model.items = this.model.items.sort( (a, b) => {
      if(a.action.toLocaleLowerCase() < b.action.toLocaleLowerCase()) {
        if (ascendent) {
          return -1;
        } else {
          return 1
        }
      }
      else if (a.action.toLocaleLowerCase() > b.action.toLocaleLowerCase()){
        if (ascendent) {
          return 1;
        } else {
          return -1
        }
      }
      else return 0
    });
    this.sortByName = true;
    this.ascendent = ascendent;
  }

  sortArrayByPrioridad(ascendent: boolean = true){
    if (ascendent) {
      this.model.items = this.model.items.sort( (a, b) => (b.prioridad - a.prioridad));
    } else {
      this.model.items = this.model.items.sort( (a, b) => (a.prioridad - b.prioridad));
    }
    this.sortByName = false;
    this.ascendent = ascendent;
  }

  /**
   * Add / Remove / Complete
   */

  addItem (action){
    this.model.items.push({action: action.value, done: false, id: uuid.v4(), prioridad: 0});
    if(this.sortByName){
      this.sortArrayByName(this.ascendent);
    }else {
      this.sortArrayByPrioridad(this.ascendent);
    }
  }

  deleteTask(id: number) {
    this.model.items = this.model.items.filter( item => {
      return item.id != id;
    })
  }

  completeTask () {
    let completeTaskCount = 0 ;
    this.model.items.forEach(item => {
      item.done ? completeTaskCount++:'';
    });
    return completeTaskCount;
  }

  changePriority($event: any, id: number) {
    const index = this.model.items.findIndex(item => item.id == id, id)
    this.model.items[index].prioridad = $event;
  }
}
