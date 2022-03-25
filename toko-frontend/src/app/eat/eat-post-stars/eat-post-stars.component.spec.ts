import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatPostStarsComponent } from './eat-post-stars.component';

describe('EatPostStarsComponent', () => {
  let component: EatPostStarsComponent;
  let fixture: ComponentFixture<EatPostStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatPostStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatPostStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
