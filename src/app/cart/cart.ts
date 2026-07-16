import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { BurgerCart } from '../burger-cart';
import { Burger } from '../burger-list/Burger';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {

  cartList$: Observable<Burger[]>;
  total$: Observable<number>;

  animandoCompra: boolean = false;
  cerrandoAnimacion: boolean = false;

  constructor(
    private cart: BurgerCart,
    private router: Router,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    this.cartList$ = this.cart.cartList.asObservable();

    this.total$ = this.cartList$.pipe(
      map(burgers =>
        burgers.reduce(
          (total, burger) =>
            total + (burger.precio * burger.cantidad),
          0
        )
      )
    );
  }

  ngOnInit(): void {
  }

  removeFromCart(burger: Burger): void {
    this.cart.removeFromCart(burger);
  }

comprarCarrito(): void {
  this.animandoCompra = true;
  this.cerrandoAnimacion = false;

  setTimeout(() => {
    this.cerrandoAnimacion = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      window.location.href = '/';
    }, 700);

  }, 3000);
}

}