import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayListInterface, SoundCloudUserInterface, TrackInterface } from '@app/models';

@Component({
  selector: 'app-overview-tab',
  templateUrl: './overview-tab.component.html',
  styleUrls: ['./overview-tab.component.scss']
})
export class OverviewTabComponent implements OnInit {
  @Input() tracks: Array<TrackInterface> = [];
  @Input() playlists: Array<PlayListInterface> = [];
  @Input() people: Array<SoundCloudUserInterface> = [];
  @Input() loadData: boolean;
  @Output() getTab = new EventEmitter();

  limit = 6;
  p = 1;

  constructor() { }

  ngOnInit(): void {
  }

  sendTab(tab: any) {
    this.getTab.emit(tab);
  }

  loadItem() {
    this.p > 4 ? this.p = 5 : this.p++
  }

  previous() {
    this.p === 1 ? this.p : this.p--
  }
}
