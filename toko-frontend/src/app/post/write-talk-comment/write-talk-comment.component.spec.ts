import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTalkCommentComponent } from './write-talk-comment.component';

describe('WriteTalkCommentComponent', () => {
  let component: WriteTalkCommentComponent;
  let fixture: ComponentFixture<WriteTalkCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteTalkCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteTalkCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
