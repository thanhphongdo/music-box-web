import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerQueuePlaylistComponent } from './player-queue-playlist.component';

describe('PlayerQueuePlaylistComponent', () => {
  let component: PlayerQueuePlaylistComponent;
  let fixture: ComponentFixture<PlayerQueuePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerQueuePlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerQueuePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
