import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist } from '@app/models/interfaces/playlist';
import { PlaylistService } from '@app/services/playlist.service';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.scss']
})
export class MyPlaylistComponent implements OnInit {
  myPlaylist: Array<Playlist>;

  constructor(private sharedService: SharedService, private playlistService: PlaylistService) {
    this.sharedService.itemActive = "Library";
    this.sharedService.hideOnMobile = true;
    this.sharedService.showAccount = false;
    this.sharedService.libraryMenuItem = 'Playlists';
  }

  ngOnInit(): void {
    this.getMyPlaylist()
  }

  getMyPlaylist() {
    this.playlistService.getMyPlaylist().subscribe(data => {
      this.myPlaylist = data as any;
      console.log(this.myPlaylist)
    }, err => {
      console.log(err)
    })
  }
}
