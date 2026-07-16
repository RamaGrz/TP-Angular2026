import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Burger } from '../burger-list/Burger';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {
  @Input()
  cantidad!: number;

  @Input()
  max!: number;


  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    maxReached: EventEmitter<number> = new EventEmitter<number>();

    restarCantidad(): void {
  if (this.cantidad > 0) {
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }
}

sumarCantidad(): void {
  if (this.cantidad < this.max) {
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
  } else {
    this.maxReached.emit(this.max);
  }
}

changeQuantity(event: Event): void {
  console.log(event)
  this.cantidadChange.emit(this.cantidad);
}
}

