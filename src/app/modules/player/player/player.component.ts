import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService, SoundCloudService } from 'src/app/services';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  dataLoaded: boolean = false;
  playlistId: number;
  playlist:any;

  constructor(
    private route: ActivatedRoute,
    public playerService: PlayerService,
    private soundCloudService: SoundCloudService,
    private location: Location
    ) { }
  
  ngOnInit(): void {
    this.getPlaylistId();
    this.loadPlaylist();
  }
  
  getPlaylistId() {
    // 127755258
    this.playlistId = Number(this.route.snapshot.paramMap.get('id'));
  }
  
  loadPlaylist() {
    this.soundCloudService.getPlaylistById(this.playlistId).toPromise()
      .then(data => {
        this.dataLoaded = true;
        this.playlist = data;
        console.log(this.playlist);
      })
      .catch(err => {
        console.log(err);
      });
  }

  playThisPlaylist() {
    this.playerService.initPlaylist(this.playlistId);
  }

  converToHours(duration: number) {
    const hr = Math.floor(duration / 1000 / 60 / 60);
    const min = Math.floor((duration - (hr * 1000 * 60 * 60)) / 60000)
    return `${hr} hr ${min} min`;
  }

  goBack(): void {
    this.location.back();
  }
  
  playThisTrack(track: any) {
    this.playerService.playSingleTrack(this.playlist, track);
  }
}
