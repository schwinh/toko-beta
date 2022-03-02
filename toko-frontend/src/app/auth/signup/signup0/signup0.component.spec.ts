import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup0Component } from './signup0.component';

describe('Signup0Component', () => {
  let component: Signup0Component;
  let fixture: ComponentFixture<Signup0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signup0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
