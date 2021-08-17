import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistPopupComponent } from './my-playlist-popup.component';

describe('MyPlaylistPopupComponent', () => {
  let component: MyPlaylistPopupComponent;
  let fixture: ComponentFixture<MyPlaylistPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaylistPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaylistPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
