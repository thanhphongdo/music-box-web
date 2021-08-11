import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInWebComponent } from './player-in-web.component';

describe('PlayerInWebComponent', () => {
  let component: PlayerInWebComponent;
  let fixture: ComponentFixture<PlayerInWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerInWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
