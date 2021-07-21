import { Component, Input, OnInit } from '@angular/core';
import { PlayListInterface, TrackInterface, UserInterface } from '@app/models';

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent implements OnInit {
  @Input() data: Array<TrackInterface | PlayListInterface> = [];

  itemsPerPage = 18;
  p = 1;
  loading = true;

  constructor() { }

  ngOnInit(): void {

  }

  onScrollDown() {
    setTimeout(x => {
      this.itemsPerPage += 12
      this.loading = false
    }, 1000)
  }
}
