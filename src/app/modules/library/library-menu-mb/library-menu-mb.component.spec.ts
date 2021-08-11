import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMenuMbComponent } from './library-menu-mb.component';

describe('LibraryMenuMbComponent', () => {
  let component: LibraryMenuMbComponent;
  let fixture: ComponentFixture<LibraryMenuMbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryMenuMbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMenuMbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
