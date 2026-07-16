import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmashBurgers } from './smash-burgers/smash-burgers';
import { SmashContact } from './smash-contact/smash-contact';
import { BurgerForm } from './burger-form/burger-form';

const routes: Routes = [
  { path: '', redirectTo: '/burgers'  , pathMatch: 'full' },
  { path: 'burgers', component: SmashBurgers },
  { path: 'contact', component: SmashContact },
  { path: 'crear-smash',component: BurgerForm}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
