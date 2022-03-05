import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteEatCommentComponent } from './write-eat-comment.component';

describe('WriteEatCommentComponent', () => {
  let component: WriteEatCommentComponent;
  let fixture: ComponentFixture<WriteEatCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteEatCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteEatCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
