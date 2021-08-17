import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningPopUpComponent } from './listening-pop-up.component';

describe('ListeningPopUpComponent', () => {
  let component: ListeningPopUpComponent;
  let fixture: ComponentFixture<ListeningPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeningPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
