import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {fromPromise} from 'rxjs/internal-compatibility';


@Injectable({
  providedIn: 'root'
})


export class TodoService {

  constructor(
    private httpClient:HttpClient,
    private fdb:AngularFireDatabase,
    private authFire: AngularFireAuth,

  ) {

    this.authFire.authState.subscribe(
      data => console.log("Loggeado ", data),
      error => console.log("Error ", error),
      () => console.log("Auth complete!")
    );

  }

  getItems(): Observable<any>{
    return this.httpClient.get('./assets/items.json');
  }

  getItemsFirebase(): Observable<any>{
    return this.fdb.list('todo').valueChanges();
  }

  login(): Observable<any> {
    return fromPromise(this.authFire.auth.signInWithEmailAndPassword("soniagithub@gmail.com", "sonia1010"));
  }

  logout() :void {
    this.authFire.auth.signOut();
  }

}
