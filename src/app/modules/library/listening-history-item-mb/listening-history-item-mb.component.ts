import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-history-item-mb',
  templateUrl: './listening-history-item-mb.component.html',
  styleUrls: ['./listening-history-item-mb.component.scss']
})
export class ListeningHistoryItemMbComponent implements OnInit {
  @Input() data!: any;
  @Input() title: string;

  today = new Date();
  itemsPerPage = 4;
  loadData: boolean;
  p = 1;

  constructor() { }

  ngOnInit(): void {
  }

  translate(value: any) {
    const minute = Math.floor(value / 60000);
    const second = Math.floor((value - (minute * 60000)) / 1000);
    return `${minute}:${second < 10 ? '0' + second : second}`;
  }

  loadMore() {
    this.loadData = true;
    this.itemsPerPage += 10;
  }

  onScrollDown() {
    if (this.loadData) this.itemsPerPage += 10;
  }
}
