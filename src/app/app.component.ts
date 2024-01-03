import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./contador/hijo/hijo.component";
import { Store, StoreModule } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
       RouterOutlet, 
       HijoComponent
      ]
})
export class AppComponent {
  
  contador!: number;

  constructor(private store: Store<AppState>){
    this.store.select('contador').subscribe(contador => {
      console.log(contador);
      this.contador = contador;
    })

  }

  incrementar(){
    this.store.dispatch(actions.incrementar())


  }
  decrementar(){
    this.store.dispatch(actions.decrementar())
  

  }

}
