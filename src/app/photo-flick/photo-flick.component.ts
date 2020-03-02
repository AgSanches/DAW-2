import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-flick',
  templateUrl: './photo-flick.component.html',
  styleUrls: ['./photo-flick.component.scss']
})
export class PhotoFlickComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
