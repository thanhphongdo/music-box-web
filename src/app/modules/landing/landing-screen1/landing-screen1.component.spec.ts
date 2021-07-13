import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreen1Component } from './landing-screen1.component';

describe('LandingScreen1Component', () => {
  let component: LandingScreen1Component;
  let fixture: ComponentFixture<LandingScreen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingScreen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
