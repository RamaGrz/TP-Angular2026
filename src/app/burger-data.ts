import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Burger } from './burger-list/Burger';
import { Observable } from 'rxjs';

const URL = 'https://6a3d5417d8e212699e23c52b.mockapi.io/burgers/burgers';

@Injectable({
  providedIn: 'root',
})
export class BurgerData {

  constructor(private http: HttpClient) {}

  public getBurgers(): Observable<Burger[]> {
    return this.http.get<Burger[]>(URL);
  }

  public addBurger(burger: Burger): Observable<Burger> {
    return this.http.post<Burger>(URL, burger);
  }
}