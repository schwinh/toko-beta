import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMinipostComponent } from './post-minipost.component';

describe('PostMinipostComponent', () => {
  let component: PostMinipostComponent;
  let fixture: ComponentFixture<PostMinipostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMinipostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMinipostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
