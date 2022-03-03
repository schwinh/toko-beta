import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMedComponent } from './banner-med.component';

describe('BannerMedComponent', () => {
  let component: BannerMedComponent;
  let fixture: ComponentFixture<BannerMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
