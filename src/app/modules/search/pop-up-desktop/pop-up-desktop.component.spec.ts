import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDesktopComponent } from './pop-up-desktop.component';

describe('PopUpDesktopComponent', () => {
  let component: PopUpDesktopComponent;
  let fixture: ComponentFixture<PopUpDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
