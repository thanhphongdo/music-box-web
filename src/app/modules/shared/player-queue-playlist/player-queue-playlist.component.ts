import { Component, OnChanges, OnInit } from '@angular/core';
import { TrackInterface } from '@app/models';
import { PlayerService } from '@app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-queue-playlist',
  templateUrl: './player-queue-playlist.component.html',
  styleUrls: ['./player-queue-playlist.component.scss']
})
export class PlayerQueuePlaylistComponent implements OnInit {
  dataLoaded: Observable<boolean> = this.playerService.hadData$;
  queueShow = false;
  items$: Observable<TrackInterface[]> = this.playerService.tracks$;
  next: any
  options = {
    handle: '.handle',
    onUpdate: (event: any) => {
      this.postChangesToService(event);
    }
  };
  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.nextTrack$.subscribe(i => { this.next = i })
  }

  toggleQueueShow(): void {
    this.queueShow = !this.queueShow;
  }
  postChangesToService(e: any) {
    // console.log(e);
    this.playerService.sortableDisplayTracks(e.oldIndex, e.newIndex);
  }

  replaceNameTrack(name: string, length: number) {
    if (name?.length > length) {
      let nameSlice = name.slice(0, length);
      return `${nameSlice}...`;
    } else return name;
  }
}
