import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerForm } from './burger-form';

describe('BurgerForm', () => {
  let component: BurgerForm;
  let fixture: ComponentFixture<BurgerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BurgerForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
