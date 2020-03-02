import {Component, OnDestroy, OnInit} from '@angular/core';
import * as uuid from 'uuid';
import {Task} from './model/task';
import {TodoService} from './todo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy{
  title = 'Todo List';

  ascendent: boolean;

  sortByName:boolean;

  model = {
    user:   "Usuario1",
    items: []
  };

  private subscription: Subscription;

  constructor(private todoService:TodoService) {
    this.subscription = this.todoService.getItems().subscribe((items) => {
      this.model.items = items;
      this.sortArrayByName();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
    if(!this.sortByName){
      this.sortArrayByPrioridad(this.ascendent);
    }
  }
}
