import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreen5BenefitComponent } from './landing-screen5-benefit.component';

describe('LandingScreen5BenefitComponent', () => {
  let component: LandingScreen5BenefitComponent;
  let fixture: ComponentFixture<LandingScreen5BenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingScreen5BenefitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreen5BenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
