import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningHistoryItemMbComponent } from './listening-history-item-mb.component';

describe('ListeningHistoryItemMbComponent', () => {
  let component: ListeningHistoryItemMbComponent;
  let fixture: ComponentFixture<ListeningHistoryItemMbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeningHistoryItemMbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningHistoryItemMbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
