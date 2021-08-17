import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendSongComponent } from './recommend-song.component';

describe('RecommendSongComponent', () => {
  let component: RecommendSongComponent;
  let fixture: ComponentFixture<RecommendSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
