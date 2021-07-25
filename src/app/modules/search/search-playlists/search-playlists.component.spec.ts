import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlaylistsComponent } from './search-playlists.component';

describe('SearchPlaylistsComponent', () => {
  let component: SearchPlaylistsComponent;
  let fixture: ComponentFixture<SearchPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
