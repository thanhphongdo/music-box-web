import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyPopupComponent } from './recently-popup.component';

describe('RecentlyPopupComponent', () => {
  let component: RecentlyPopupComponent;
  let fixture: ComponentFixture<RecentlyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
