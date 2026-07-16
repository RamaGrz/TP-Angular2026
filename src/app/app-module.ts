import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BurgerList } from './burger-list/burger-list';
import { FormsModule } from '@angular/forms';
import { Cart } from './cart/cart';
import { SmashContact } from './smash-contact/smash-contact';
import { SmashBurgers } from './smash-burgers/smash-burgers';
import { InputInteger } from './input-integer/input-integer';

@NgModule({
  declarations: [App, BurgerList, Cart, SmashContact, SmashBurgers, InputInteger],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [App],
})
export class AppModule {}
