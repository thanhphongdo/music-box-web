import { Component, Input, OnInit } from '@angular/core';
import { PlayListInterface } from '@app/models';

@Component({
  selector: 'app-playlist-tab',
  templateUrl: './playlist-tab.component.html',
  styleUrls: ['./playlist-tab.component.scss']
})
export class PlaylistTabComponent implements OnInit {
  @Input() playlists: Array<PlayListInterface> = [];
  @Input() loadData: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
