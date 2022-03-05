import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatDetailComponent } from './eat-detail.component';

describe('EatDetailComponent', () => {
  let component: EatDetailComponent;
  let fixture: ComponentFixture<EatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
