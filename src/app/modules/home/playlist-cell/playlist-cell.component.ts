import { Component, OnInit, Input } from '@angular/core';
import { PlayListInterface, TrackInterface } from '@app/models';
import { PlayerService } from '@app/services';

@Component({
  selector: 'app-playlist-cell',
  templateUrl: './playlist-cell.component.html',
  styleUrls: ['./playlist-cell.component.scss']
})
export class PlaylistCellComponent implements OnInit {
  @Input() item: TrackInterface | PlayListInterface;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  playPlaylist(id: number) {
    this.playerService.initPlaylist(id);
  }
}
