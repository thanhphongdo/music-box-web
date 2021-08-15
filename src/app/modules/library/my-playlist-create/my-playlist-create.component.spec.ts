import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaylistCreateComponent } from './my-playlist-create.component';

describe('MyPlaylistCreateComponent', () => {
  let component: MyPlaylistCreateComponent;
  let fixture: ComponentFixture<MyPlaylistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaylistCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaylistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
