import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseDetailsComponent } from './browse-details.component';

describe('BrowseDetailsComponent', () => {
  let component: BrowseDetailsComponent;
  let fixture: ComponentFixture<BrowseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
