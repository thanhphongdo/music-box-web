import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundRandomComponent } from './background-random.component';

describe('BackgroundRandomComponent', () => {
  let component: BackgroundRandomComponent;
  let fixture: ComponentFixture<BackgroundRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
