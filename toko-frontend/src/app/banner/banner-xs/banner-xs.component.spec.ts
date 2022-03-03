import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerXsComponent } from './banner-xs.component';

describe('BannerXsComponent', () => {
  let component: BannerXsComponent;
  let fixture: ComponentFixture<BannerXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
