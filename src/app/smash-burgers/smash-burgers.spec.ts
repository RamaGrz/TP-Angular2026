import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashBurgers } from './smash-burgers';

describe('SmashBurgers', () => {
  let component: SmashBurgers;
  let fixture: ComponentFixture<SmashBurgers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmashBurgers],
    }).compileComponents();

    fixture = TestBed.createComponent(SmashBurgers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
