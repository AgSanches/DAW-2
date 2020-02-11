import { Component } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'Todo List';

  sortMethod = this.sortArrayByPrioridad;

  model = {
    user: "Usuario1",
    items: [
      { id: 0, action:"a1", done: false, prioridad: 1 },
      { id: 1, action:"b", done: true,  prioridad: 2 },
      { id: 2, action:"Estudiar daw", done: false, prioridad: 3 },
      { id: 3, action:"cstudiar daw", done: true, prioridad: 4 },
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
    console.log(this.model.items);
  }

  deleteTask(id: number) {
    this.model.items = this.model.items.filter( item => {
      return item.id != id;
    })
  }

  setSortByName(){
    this.sortMethod = this.sortArrayByName;
  }

  setSortByPrioridad(){
    this.sortMethod = this.sortArrayByPrioridad;
  }

  sortArrayByName(){
    return this.model.items.sort( (a, b) => {
      if(a.action.toLocaleLowerCase() < b.action.toLocaleLowerCase()) return -1;
      else if (a.action.toLocaleLowerCase() > b.action.toLocaleLowerCase()) return 1;
      else return 0
    });
  }

  sortArray(){
    return this.sortMethod();
  }

  sortArrayByPrioridad(){
    return this.model.items.sort( (a, b) => (b.prioridad - a.prioridad));
  }

  changePriority($event: any, id: number) {
    const index = this.model.items.findIndex(item => item.id == id, id)
    this.model.items[index].prioridad = $event;
  }
}
