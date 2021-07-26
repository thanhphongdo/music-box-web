import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSongComponent } from './pop-up-song.component';

describe('PopUpSongComponent', () => {
  let component: PopUpSongComponent;
  let fixture: ComponentFixture<PopUpSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
