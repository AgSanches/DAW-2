import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PrioridadComponent } from './prioridad/prioridad.component';
import { FiltroDonePipe } from './filtro-done.pipe';
import { PhotoFlickComponent } from './photo-flick/photo-flick.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    PrioridadComponent,
    FiltroDonePipe,
    PhotoFlickComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
