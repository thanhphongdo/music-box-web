import { Component, Input, OnInit } from '@angular/core';
import { TrackInterface } from '@app/models';
import { PlayerService } from '@app/services';

@Component({
  selector: 'app-player-queue-item',
  templateUrl: './player-queue-item.component.html',
  styleUrls: ['./player-queue-item.component.scss']
})
export class PlayerQueueItemComponent implements OnInit {
  @Input() item: any;
  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
  }

  replaceNameTrack(name: string, length: number) {
    if (!name) return;
    if (name.length > length) {
      let nameSlice = name.slice(0, length);
      return `${nameSlice}...`;
    } else return name;
  }

  convertToMinus(num: number) {
    const minus = Math.floor(num / 60000);
    const second = Math.floor((num - (minus * 60000)) / 1000);
    return `${minus}:${second}`;
  }

  playThisTrack() {
    this.playerService.playThisTrack(this.item);
  }

  deleteTrack() {
    this.playerService.removeTrackOutDisplayTracks(this.item);
  }
}
