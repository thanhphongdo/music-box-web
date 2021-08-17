import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddTrackComponent } from './pop-up-add-track.component';

describe('PopUpAddTrackComponent', () => {
  let component: PopUpAddTrackComponent;
  let fixture: ComponentFixture<PopUpAddTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
