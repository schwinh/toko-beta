import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatMinipostComponent } from './eat-minipost.component';

describe('EatMinipostComponent', () => {
  let component: EatMinipostComponent;
  let fixture: ComponentFixture<EatMinipostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatMinipostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatMinipostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
