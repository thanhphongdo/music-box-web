import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningHistoryComponent } from './listening-history.component';

describe('ListeningHistoryComponent', () => {
  let component: ListeningHistoryComponent;
  let fixture: ComponentFixture<ListeningHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeningHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
