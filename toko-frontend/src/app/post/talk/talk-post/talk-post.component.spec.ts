import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkPostComponent } from './talk-post.component';

describe('TalkPostComponent', () => {
  let component: TalkPostComponent;
  let fixture: ComponentFixture<TalkPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
