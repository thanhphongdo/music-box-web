import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from '@app/models/interfaces/playlist';
import { SoundCloudService } from '@app/services';
import { PlaylistService } from '@app/services/playlist.service';

@Component({
  selector: 'app-pop-up-song',
  templateUrl: './pop-up-song.component.html',
  styleUrls: ['./pop-up-song.component.scss']
})
export class PopUpSongComponent implements OnInit {
  @Input() item: any;
  @Input() idModal: number;
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('closeModal2') closeModal2!: ElementRef;
  myPlaylist: Array<Playlist>;
  trackId: any;

  constructor(private route: ActivatedRoute, private soundCloudService: SoundCloudService, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getMyPlaylist();
  }

  translate(value: any) {
    const minute = Math.floor(value / 60000);
    const second = Math.floor((value - (minute * 60000)) / 1000);
    return `${minute}:${second < 10 ? '0' + second : second}`;
  }

  openNewModal(trackId) {
    this.closeModal.nativeElement.click();
    this.trackId = trackId
    console.log(this.trackId)
  }

  getMyPlaylist() {
    this.playlistService.getMyPlaylist().subscribe(data => {
      this.myPlaylist = data as any;
    }, err => {
      console.log(err)
    })
  }

  ngAfterContentChecked() {

  }

  addToPlaylist(playlist, item) {
    let track = this.item;

    // let item = {
    //   playlistId: playlist.objectId,
    //   trackId: this.trackId,
    //   duration: track.duration,
    //   track: track
    // }

    // this.playlistService.addToPlaylist(item).subscribe(data => {
    //   this.closeModal2.nativeElement.click();
    //   this.getMyPlaylist();
    //   alert('add track to playlist success')
    // }, err => {
    //   console.log(err)
    //   alert('track is exist');
    // })
  }
}
