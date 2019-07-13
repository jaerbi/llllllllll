import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAWojNnC8eyWBQhjmMBg9_abB5XBqKQZ5s',
  authDomain: 'llll-d845d.firebaseapp.com',
  databaseURL: 'https://llll-d845d.firebaseio.com/',
  projectId: 'llll-d845d',
  storageBucket: '',
  messagingSenderId: '189381062081'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
