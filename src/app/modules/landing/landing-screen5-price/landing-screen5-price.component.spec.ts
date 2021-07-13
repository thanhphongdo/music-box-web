import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreen5PriceComponent } from './landing-screen5-price.component';

describe('LandingScreen5PriceComponent', () => {
  let component: LandingScreen5PriceComponent;
  let fixture: ComponentFixture<LandingScreen5PriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingScreen5PriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreen5PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
