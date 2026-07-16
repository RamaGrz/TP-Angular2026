import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Burger } from './Burger';
import { BurgerCart } from '../burger-cart';
import { BurgerData } from '../burger-data';

@Component({
  selector: 'app-burger-list',
  standalone: false,
  templateUrl: './burger-list.html',
  styleUrls: ['./burger-list.scss'],
})
export class BurgerList implements OnInit {
 burgers: Burger[] = [];
 burgerAgregada: Burger | null = null;


  constructor (private cart: BurgerCart,
               private burgerData: BurgerData,
               private cdr: ChangeDetectorRef
  ) {
  }


  ngOnInit(): void {
    this.burgerData.getBurgers().subscribe((burgers) => {
      this.burgers = burgers.map(burger => ({
        ...burger,
        cantidad: 0
      }));

      this.cdr.detectChanges();
    });

    this.cart.stockDevuelto.subscribe((data) => {
      const burger = this.burgers.find(
        item => item.nombre === data.nombre
      );

      if (burger) {
        burger.stock += data.cantidad;
        this.cdr.detectChanges();
      }
    });
  }

 addToCart(burger: Burger): void {
  if (!burger.cantidad || burger.cantidad <= 0) {
    return;
  }

  this.burgerAgregada = burger;

  setTimeout(() => {
    this.cart.addToCart(burger);
    burger.stock -= burger.cantidad;
    burger.cantidad = 0;

    this.burgerAgregada = null;
  }, 900);
}

  maxReached(event: number): void {
    alert(`No hay más stock disponible. Stock máximo: ${event}`);
  }

}








  

