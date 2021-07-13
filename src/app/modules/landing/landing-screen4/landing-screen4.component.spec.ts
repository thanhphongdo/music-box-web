import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreen4Component } from './landing-screen4.component';

describe('LandingScreen4Component', () => {
  let component: LandingScreen4Component;
  let fixture: ComponentFixture<LandingScreen4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingScreen4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreen4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
