import { Component, Input, OnInit } from '@angular/core';
import { PlayListInterface } from '@app/models';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent implements OnInit {
  @Input() playlists: PlayListInterface;
  @Input() limit: number;
  bgRandom: string;

  constructor() { }

  ngOnInit(): void {
    this.getRandomBackground();
  }

  getRandomBackground() {
    this.bgRandom = ('track-bg-' + Math.floor(Math.random() * 10))
  }

}
