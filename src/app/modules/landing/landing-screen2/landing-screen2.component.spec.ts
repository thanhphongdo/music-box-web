import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreen2Component } from './landing-screen2.component';

describe('LandingScreen2Component', () => {
  let component: LandingScreen2Component;
  let fixture: ComponentFixture<LandingScreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingScreen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
