import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '@app/models/interfaces/playlist';
import { SoundCloudService } from '@app/services';
import { PlaylistService } from '@app/services/playlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up-song',
  templateUrl: './pop-up-song.component.html',
  styleUrls: ['./pop-up-song.component.scss']
})
export class PopUpSongComponent implements OnInit {
  @Input() item: any;
  @Input() idModal: number;
  @ViewChild('closeModal') closeModal!: ElementRef;
  myPlaylist: Array<Playlist>;
  track: any;
  hidden = true;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getMyPlaylist();
  }

  translate(value: any) {
    const minute = Math.floor(value / 60000);
    const second = Math.floor((value - (minute * 60000)) / 1000);
    return `${minute}:${second < 10 ? '0' + second : second}`;
  }

  getMyPlaylist() {
    this.playlistService.getMyPlaylist(1, 30).subscribe(data => {
      this.myPlaylist = data.data as any;
    }, err => {
      console.log(err)
    })
  }

  hide() {
    this.hidden = false;
  }

  addToPlaylist(playlist, track) {
    let item = {
      playlistId: playlist.objectId,
      trackId: track.id,
      duration: track.duration,
      track: track
    }

    this.playlistService.addToPlaylist(item).subscribe(data => {
      this.closeModal.nativeElement.click();
      this.getMyPlaylist();
      this.toastr.success('', `Add  "${track.title}" to Playlist successfully`)
    }, err => {
      console.log(err)
      this.toastr.error('The song already exists')
    })
  }
}
