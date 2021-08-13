import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { PlayListInterface, TrackInterface } from '@app/models';
import { PlayerService, SoundCloudService } from '@app/services';
import { LibraryService } from '@app/services/library.service';

@Component({
  selector: 'app-playlist-cell',
  templateUrl: './playlist-cell.component.html',
  styleUrls: ['./playlist-cell.component.scss']
})
export class PlaylistCellComponent implements OnInit {
  @Input() item: TrackInterface | PlayListInterface;
  constructor(private playerService: PlayerService, private soundCloudService: SoundCloudService, private libraryService: LibraryService) { }

  recentlyPlayed: any;


  ngOnInit(): void {

  }

  playPlaylist(id: number) {
    this.playerService.initPlaylist(id);
    this.soundCloudService.getPlaylistById(id).subscribe(data => {
      console.log(data)
      this.recentlyPlayed = data

      enum TYPE { track = 1, playlist = 2 }

      let playlist = {
        id: id.toString(),
        type: TYPE.playlist,
        detailInfo: {
          id: id.toString(),
          image: this.recentlyPlayed.artwork_url,
          title: this.recentlyPlayed.title,
          description: this.recentlyPlayed.description,
          tracks: this.recentlyPlayed.tracks
        }
      }

      this.libraryService.saveRecentlyPlayed(playlist).subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err)
      })

    }, err => {
      console.log(err)
    });
  }
}
