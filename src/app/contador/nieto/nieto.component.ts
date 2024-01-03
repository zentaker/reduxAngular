import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  standalone: true,
  imports: [],
  templateUrl: './nieto.component.html',
  styles: ``
})
export class NietoComponent {
  @Input() contador!: number;
  @Output() contadorcambio = new EventEmitter<number>();

  reset(){
    this.contador = 0;
    this.contadorcambio.emit(0);
  }

}
