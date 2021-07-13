import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreen3Component } from './landing-screen3.component';

describe('LandingScreen3Component', () => {
  let component: LandingScreen3Component;
  let fixture: ComponentFixture<LandingScreen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingScreen3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
