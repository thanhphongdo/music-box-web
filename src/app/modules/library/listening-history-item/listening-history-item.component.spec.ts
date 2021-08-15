import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningHistoryItemComponent } from './listening-history-item.component';

describe('ListeningHistoryItemComponent', () => {
  let component: ListeningHistoryItemComponent;
  let fixture: ComponentFixture<ListeningHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeningHistoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
