import { Component, OnInit } from '@angular/core';
import { TrackInterface } from 'src/app/models';
import { SoundCloudService, UserService } from 'src/app/services';
declare var Hls: any;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  term: string;
  audio: any;
  tracks: Array<TrackInterface> = [];
  constructor(
    private soundCloudService: SoundCloudService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  search() {
    this.soundCloudService.searchEveryting(this.term, 10, 0).subscribe(data => {
      this.tracks = data.collection as any;
    }, err => {
      console.log(err);
    })
  }

  play(track: TrackInterface) {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.soundCloudService.getHLS(track?.media.transcodings[0]?.url).subscribe(data => {
      // console.log(data.url);
      this.audio = document.createElement('audio');
      let hls = new Hls();
      hls.attachMedia(this.audio);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(data.url);
      });
      this.audio.play();
    });
  }

  signUp() {
    const randomNumber = Math.round(Math.random() * 100000);
    this.userService.signUp({
      username: 'pgsw_' + randomNumber,
      email: `pgsw${randomNumber}@yopmail.com`,
      password: 'abcd1234',
      birthDate: '1999-09-09',
      sex: 0
    }).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  login() {
    this.userService.login({
      email: 'pgsw001@yopmail.com',
      password: 'abcd1234'
    }).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
