import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerList } from './burger-list';

describe('BurgerList', () => {
  let component: BurgerList;
  let fixture: ComponentFixture<BurgerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BurgerList],
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
