import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteaccComponent } from './deleteacc.component';

describe('DeleteaccComponent', () => {
  let component: DeleteaccComponent;
  let fixture: ComponentFixture<DeleteaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
