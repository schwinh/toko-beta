import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatcontentComponent } from './eatcontent.component';

describe('EatcontentComponent', () => {
  let component: EatcontentComponent;
  let fixture: ComponentFixture<EatcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
