import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-history-item',
  templateUrl: './listening-history-item.component.html',
  styleUrls: ['./listening-history-item.component.scss']
})
export class ListeningHistoryItemComponent implements OnInit {
  @Input() data!: any;
  @Input() title: string;
  itemsPerPage = 4;
  p = 1;

  constructor() { }

  ngOnInit(): void {

  }

  translate(value: any) {
    const minute = Math.floor(value / 60000);
    const second = Math.floor((value - (minute * 60000)) / 1000);
    return `${minute}:${second < 10 ? '0' + second : second}`;
  }

  showMore() {
    this.itemsPerPage += 10;
  }
}
