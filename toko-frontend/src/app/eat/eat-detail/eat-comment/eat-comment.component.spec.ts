import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatCommentComponent } from './eat-comment.component';

describe('EatCommentComponent', () => {
  let component: EatCommentComponent;
  let fixture: ComponentFixture<EatCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
