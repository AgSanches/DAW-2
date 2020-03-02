import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-callback-hell',
  templateUrl: './callback-hell.component.html',
  styleUrls: ['./callback-hell.component.scss']
})
export class CallbackHellComponent implements OnInit {

  private text: string = "";
  private timeOut: any;
  private flickApi: string;
  flickData: any[];

  constructor() {
    this.flickApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
  }

  ngOnInit() {
  }

  /**
   * Evitar sobrecargar el servidor con peticiones.
   */
  debounce(){
    if(this.timeOut) window.clearTimeout(this.timeOut);

    this.timeOut = window.setTimeout( () => {
      this.liveSearch();
    }, 1000);

  }

  tecla($event: any) {
    this.text = $event.target.value;
    if(this.text.length < 4) return;

    this.debounce();
  }

  liveSearch(){
    $.getJSON(this.flickApi,{
      tags: this.text,
      tagmode: "all",
      format: "json"
    }, this.respuesta.bind(this));
  }

  respuesta(datos: any){
    this.flickData = datos.items;
    console.log(this.flickData);
  }


}
