import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewReleaseComponent } from './overview-release.component';

describe('OverviewReleaseComponent', () => {
  let component: OverviewReleaseComponent;
  let fixture: ComponentFixture<OverviewReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
