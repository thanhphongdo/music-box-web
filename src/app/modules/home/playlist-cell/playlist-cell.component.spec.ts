import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCellComponent } from './playlist-cell.component';

describe('PlaylistCellComponent', () => {
  let component: PlaylistCellComponent;
  let fixture: ComponentFixture<PlaylistCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
