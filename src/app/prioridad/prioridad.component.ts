import {Component, Input, OnInit} from '@angular/core';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-prioridad',
  templateUrl: './prioridad.component.html',
  styleUrls: ['./prioridad.component.scss']
})
export class PrioridadComponent implements OnInit {

  @Input() item: any;
  MAXPRIORIDAD:number = 10;
  MINPRIORIDAD:number = 0;


  constructor() { }

  ngOnInit() {

  }

  addPrioridad(){
    this.item.prioridad = Math.min(this.MAXPRIORIDAD, ++this.item.prioridad);
  }

  decreasePrioridad(){
    this.item.prioridad = Math.max(this.MINPRIORIDAD, --this.item.prioridad);
  }
}
