import { Injectable } from '@angular/core';
import { Burger } from './burger-list/Burger';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BurgerCart {

  private _cartList: Burger[] = [];

  cartList: BehaviorSubject<Burger[]> = new BehaviorSubject(this._cartList);

  stockDevuelto = new Subject<{ nombre: string, cantidad: number }>();

  constructor() { }

  addToCart(burger: Burger) {
    if (burger.cantidad <= 0) return;

    let item: Burger | undefined = this._cartList.find(
      (v1) => v1.nombre === burger.nombre
    );

    if (!item) {
      this._cartList.push({ ...burger });
    } else {
      item.cantidad += burger.cantidad;
    }

    this.cartList.next(this._cartList);
  }

  removeFromCart(burger: Burger) {
    const item = this._cartList.find(
      item => item.nombre === burger.nombre
    );

    if (item) {
      this.stockDevuelto.next({
        nombre: item.nombre,
        cantidad: item.cantidad
      });
    }

    this._cartList = this._cartList.filter(
      item => item.nombre !== burger.nombre
    );

    this.cartList.next(this._cartList);
  }
}