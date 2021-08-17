import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackInterface } from '@app/models';
import { SoundCloudService } from '@app/services';
import { PlaylistService } from '@app/services/playlist.service';

@Component({
  selector: 'app-recommend-song',
  templateUrl: './recommend-song.component.html',
  styleUrls: ['./recommend-song.component.scss']
})
export class RecommendSongComponent implements OnInit {
  @Output() updateTrackInPlaylist = new EventEmitter();
  tracks: Array<TrackInterface> = [];
  myPlaylist!: any;
  itemsPerPage = 10;
  name = 'nhac viet';
  p = 1;

  constructor(private route: ActivatedRoute, private soundCloudService: SoundCloudService, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.soundCloudService.searchTrack(this.name, 100, 0).subscribe(data => {
      this.tracks.push(...data.collection);
    }, err => {
      console.log(err)
    })
  }

  translate(value: any) {
    const minute = Math.floor(value / 60000);
    const second = Math.floor((value - (minute * 60000)) / 1000);
    return `${minute}:${second < 10 ? '0' + second : second}`;
  }

  addToPlaylist(trackId: number) {
    const playlistId = this.route.snapshot.paramMap.get('id')!;

    this.soundCloudService.getTrackById(trackId).subscribe(data => {
      let track = data as any;
      let item = {
        playlistId: playlistId,
        trackId: trackId,
        duration: track.duration,
        track: track
      }

      this.playlistService.addToPlaylist(item).subscribe(data => {
        let reload = true;
        this.updateTrackInPlaylist.emit(reload)
        alert('add track to playlist success')
      }, err => {
        console.log(err)
        alert('track is exist');
      })
    }, err => {
      console.log(err)
    })
  }

  refreshSong() {
    this.p < 10 ? this.p += 1 : this.p = 1
  }
}
