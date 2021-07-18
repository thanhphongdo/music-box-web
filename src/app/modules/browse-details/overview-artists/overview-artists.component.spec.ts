import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewArtistsComponent } from './overview-artists.component';

describe('OverviewArtistsComponent', () => {
  let component: OverviewArtistsComponent;
  let fixture: ComponentFixture<OverviewArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
