import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatPostComponent } from './eat-post.component';

describe('EatPostComponent', () => {
  let component: EatPostComponent;
  let fixture: ComponentFixture<EatPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
