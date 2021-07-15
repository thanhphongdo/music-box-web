import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCalbackComponent } from './google-callback.component';

describe('GoogleCalbackComponent', () => {
  let component: GoogleCalbackComponent;
  let fixture: ComponentFixture<GoogleCalbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleCalbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCalbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
