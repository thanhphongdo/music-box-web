import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '@app/services';
import { PlaylistService } from '@app/services/playlist.service';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-my-playlist-detail',
  templateUrl: './my-playlist-detail.component.html',
  styleUrls: ['./my-playlist-detail.component.scss']
})
export class MyPlaylistDetailComponent implements OnInit {

  myPlaylist!: any;
  nameSearch: string;
  constructor(private route: ActivatedRoute, private sharedService: SharedService, private playlistService: PlaylistService, private playerService: PlayerService) {
    this.sharedService.itemActive = "Library";
    this.sharedService.hideOnMobile = true;
    this.sharedService.showAccount = false;
  }

  ngOnInit(): void {
    this.getMyPlaylistById();
  }

  getMyPlaylistById() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.playlistService.getMyPlaylistById({ id: id }).subscribe(data => {
      this.myPlaylist = data;
    }, err => {
      console.log(err);
    })
  }

  playPlaylist(id: string) {
    this.playerService.initMyPlaylist({ id: id });
  }

  receiveData(data) {
    this.myPlaylist = data;
  }

  receiveTracks(reload) {
    if (reload) this.getMyPlaylistById();
  }

  receiveReload(reload) {
    if (reload) this.getMyPlaylistById();
  }

  translateHour(value: any) {
    let hours = Math.floor(value / 3600000 % 24);
    let minutes = Math.floor(value / 60000 % 60);

    return hours + ' hr ' + minutes + ' min';
  }

  translate(value: any) {
    const minute = Math.floor(value / 60000);
    const second = Math.floor((value - (minute * 60000)) / 1000);
    return `${minute}:${second < 10 ? '0' + second : second}`;
  }
}
