import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-history-view',
  templateUrl: './listening-history-view.component.html',
  styleUrls: ['./listening-history-view.component.scss']
})
export class ListeningHistoryViewComponent implements OnInit {
  @Input() data!: any;
  today = new Date();
  month = this.today.toLocaleString('default', { month: 'long' }) + ' ' + this.today.getFullYear();
  title = ["Today", "Yesterday", "Last week", this.month]

  constructor() { }

  ngOnInit(): void {
  }
}
