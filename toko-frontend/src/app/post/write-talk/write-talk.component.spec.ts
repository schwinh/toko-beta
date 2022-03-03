import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTalkComponent } from './write-talk.component';

describe('WriteTalkComponent', () => {
  let component: WriteTalkComponent;
  let fixture: ComponentFixture<WriteTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
