import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseGenresComponent } from './browse-genres.component';

describe('BrowseGenresComponent', () => {
  let component: BrowseGenresComponent;
  let fixture: ComponentFixture<BrowseGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseGenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
