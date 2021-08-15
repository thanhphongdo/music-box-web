import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistItemComponent } from './my-playlist-item.component';

describe('MyPlaylistItemComponent', () => {
  let component: MyPlaylistItemComponent;
  let fixture: ComponentFixture<MyPlaylistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaylistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaylistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
