import { Component, OnInit } from '@angular/core';
import { NietoComponent } from "../nieto/nieto.component";
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
    selector: 'app-hijo',
    standalone: true,
    templateUrl: './hijo.component.html',
    styles: ``,
    imports: [NietoComponent]
})
export class HijoComponent implements OnInit {
  contador!: number;

  constructor(private store: Store<AppState>){

  }
  ngOnInit(): void {
      this.store.select('contador').subscribe(
        contador => {
          this.contador = contador;
        }

      )
  }



  multiplicar(){
/*     this.contador *=2;
    this.cambioContador.emit(this.contador); */

  }
  dividir(){
/*     this.contador /=2;
    this.cambioContador.emit(this.contador); */

  }

}
