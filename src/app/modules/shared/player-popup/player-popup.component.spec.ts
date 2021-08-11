import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPopupComponent } from './player-popup.component';

describe('PlayerPopupComponent', () => {
  let component: PlayerPopupComponent;
  let fixture: ComponentFixture<PlayerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
