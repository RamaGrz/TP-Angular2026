import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashContact } from './smash-contact';

describe('SmashContact', () => {
  let component: SmashContact;
  let fixture: ComponentFixture<SmashContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmashContact],
    }).compileComponents();

    fixture = TestBed.createComponent(SmashContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
