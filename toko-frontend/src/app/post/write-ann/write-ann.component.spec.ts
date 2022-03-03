import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnnComponent } from './write-ann.component';

describe('WriteAnnComponent', () => {
  let component: WriteAnnComponent;
  let fixture: ComponentFixture<WriteAnnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteAnnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteAnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
