import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnPostComponent } from './ann-post.component';

describe('AnnPostComponent', () => {
  let component: AnnPostComponent;
  let fixture: ComponentFixture<AnnPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
