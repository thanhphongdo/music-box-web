import { Component, Input, OnInit } from '@angular/core';
import { TrackInterface } from '@app/models';

@Component({
  selector: 'app-song-tab',
  templateUrl: './song-tab.component.html',
  styleUrls: ['./song-tab.component.scss']
})
export class SongTabComponent implements OnInit {
  @Input() tracks: Array<TrackInterface> = [];
  @Input() loadData: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
