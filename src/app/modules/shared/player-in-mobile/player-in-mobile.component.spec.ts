import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInMobileComponent } from './player-in-mobile.component';

describe('PlayerInMobileComponent', () => {
  let component: PlayerInMobileComponent;
  let fixture: ComponentFixture<PlayerInMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerInMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
