import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytokoComponent } from './mytoko.component';

describe('MytokoComponent', () => {
  let component: MytokoComponent;
  let fixture: ComponentFixture<MytokoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytokoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
