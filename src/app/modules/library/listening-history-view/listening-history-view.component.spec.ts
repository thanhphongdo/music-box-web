import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningHistoryViewComponent } from './listening-history-view.component';

describe('ListeningHistoryViewComponent', () => {
  let component: ListeningHistoryViewComponent;
  let fixture: ComponentFixture<ListeningHistoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeningHistoryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
