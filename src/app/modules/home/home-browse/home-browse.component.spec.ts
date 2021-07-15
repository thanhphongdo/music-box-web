import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrowseComponent } from './home-browse.component';

describe('HomeBrowseComponent', () => {
  let component: HomeBrowseComponent;
  let fixture: ComponentFixture<HomeBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
