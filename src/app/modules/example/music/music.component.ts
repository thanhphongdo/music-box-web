import { Component, OnInit } from '@angular/core';
import { TrackInterface } from 'src/app/models';
import { SoundCloudService } from 'src/app/services/sound_cloud.service';
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
  constructor(private soundCloudService: SoundCloudService) { }

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

}
