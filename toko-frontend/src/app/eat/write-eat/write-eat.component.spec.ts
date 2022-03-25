import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteEatComponent } from './write-eat.component';

describe('WriteEatComponent', () => {
  let component: WriteEatComponent;
  let fixture: ComponentFixture<WriteEatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteEatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteEatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
