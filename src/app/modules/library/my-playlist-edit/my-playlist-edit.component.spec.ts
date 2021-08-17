import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistEditComponent } from './my-playlist-edit.component';

describe('MyPlaylistEditComponent', () => {
  let component: MyPlaylistEditComponent;
  let fixture: ComponentFixture<MyPlaylistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaylistEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaylistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
