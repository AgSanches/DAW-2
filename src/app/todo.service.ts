import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map} from 'rxjs/operators';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})


export class TodoService {

  private itemRef: AngularFireList<any>;

  constructor(
    private httpClient:HttpClient,
    private fdb:AngularFireDatabase,
    private authFire: AngularFireAuth,
  ) {

    this.authFire.authState.subscribe(
      data => console.log("Loggeado"),
      error => console.log("Error en verificar auth ", error),
      () => console.log("Auth complete!")
    );


    this.itemRef = this.fdb.list('todo');

  }

  getItems(): Observable<any>{
    return this.httpClient.get('./assets/items.json');
  }

  getItemsFirebase(): Observable<any> {

    return this.fdb.list('todo').snapshotChanges().pipe( map((changes) => {
      return changes.map( (data:any) => {
       return {
         id: data.payload.val().id,
         action: data.payload.val().action,
         prioridad: data.payload.val().prioridad,
         done: data.payload.val().done,
         key: data.payload.key
       }});
    }));
  }

  addItem(item):void{
    this.itemRef.push(item);
  }

  removeItem(id):void {
    this.itemRef.remove(id);
  }


  login(): Observable<any> {
    return fromPromise(this.authFire.auth.signInWithEmailAndPassword("soniagithub@gmail.com", "sonia1010"));
  }

  logout() :Observable<any> {
    return fromPromise(this.authFire.auth.signOut());
  }

}
