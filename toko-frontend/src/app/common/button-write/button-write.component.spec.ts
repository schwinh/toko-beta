import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWriteComponent } from './button-write.component';

describe('ButtonWriteComponent', () => {
  let component: ButtonWriteComponent;
  let fixture: ComponentFixture<ButtonWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
