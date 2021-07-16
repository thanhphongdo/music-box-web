import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMoodsComponent } from './browse-moods.component';

describe('BrowseMoodsComponent', () => {
  let component: BrowseMoodsComponent;
  let fixture: ComponentFixture<BrowseMoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseMoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseMoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
