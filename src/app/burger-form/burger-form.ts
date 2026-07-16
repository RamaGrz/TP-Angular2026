import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BurgerData } from '../burger-data';
import { Burger } from '../burger-list/Burger';

@Component({
  selector: 'app-burger-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './burger-form.html',
  styleUrl: './burger-form.scss',
})
export class BurgerForm {

  enviado: boolean = false;
  cargando: boolean = false;

  formBurger = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    descripcion: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),

    precio: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),

    stock: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),

    imagen: new FormControl('', [
      Validators.required
    ]),

    clearance: new FormControl(false)
  });

  constructor(private burgerData: BurgerData) {}

  enviarBurger(): void {
    this.enviado = false;

    if (this.formBurger.invalid) {
      this.formBurger.markAllAsTouched();
      return;
    }

    this.cargando = true;

    const nuevaBurger: Burger = {
      nombre: this.formBurger.value.nombre || '',
      descripcion: this.formBurger.value.descripcion || '',
      precio: Number(this.formBurger.value.precio),
      stock: Number(this.formBurger.value.stock),
      imagen: this.formBurger.value.imagen || '',
      clearance: this.formBurger.value.clearance || false,
      cantidad: 0
    };

    this.burgerData.addBurger(nuevaBurger).subscribe({
      next: () => {
        this.cargando = false;
        this.enviado = true;

        this.formBurger.reset({
          nombre: '',
          descripcion: '',
          precio: '',
          stock: '',
          imagen: '',
          clearance: false
        });
      },

      error: (error) => {
        console.log('Error al guardar la burger', error);

        this.cargando = false;
        this.enviado = false;

        alert('Hubo un error al guardar la burger');
      }
    });
  }

}