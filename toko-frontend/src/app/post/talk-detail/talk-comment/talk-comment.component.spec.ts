import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkCommentComponent } from './talk-comment.component';

describe('TalkCommentComponent', () => {
  let component: TalkCommentComponent;
  let fixture: ComponentFixture<TalkCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
