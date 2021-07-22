import { Component, Input, OnInit } from '@angular/core';
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

  limit = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
