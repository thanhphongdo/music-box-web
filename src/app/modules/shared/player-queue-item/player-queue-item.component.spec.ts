import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerQueueItemComponent } from './player-queue-item.component';

describe('PlayerQueueItemComponent', () => {
  let component: PlayerQueueItemComponent;
  let fixture: ComponentFixture<PlayerQueueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerQueueItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerQueueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
