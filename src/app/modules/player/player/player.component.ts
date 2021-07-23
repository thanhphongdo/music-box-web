import { Component, OnInit } from '@angular/core';
import { TrackInterface, PlayListInterface } from 'src/app/models';
import { SoundCloudService, UserService } from 'src/app/services';
declare var Hls: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  dataLoaded: boolean = false;
  isPlaying: boolean = false;
  term: string = 'Son tung MTP';
  currentTrack: number = 0;
  tracks: Array<TrackInterface> = [];
  audio: any;
  currentTime: number = 0;
  curr_time: string = "0.00"; 
  total_duration: string = "0.00";
  updateTimer: any;
  constructor(private soundCloudService: SoundCloudService) { }

  ngOnInit(): void {
    this.search();
  }
  
  search() {
    this.soundCloudService.searchEveryting(this.term, 10, 0).subscribe(data => {
      this.tracks = data.collection as any;
      console.log(this.tracks);
      this.loadTrack(this.tracks[this.currentTrack]);
      this.dataLoaded = true;
    }, err => {
      console.log(err);
    })
  }

  loadTrack(track: TrackInterface) {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.soundCloudService.getHLS(track?.media.transcodings[0]?.url).subscribe(data => {
      this.audio = document.createElement('audio');
      let hls = new Hls();
      hls.attachMedia(this.audio);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(data.url);
      });
    });
  }

  play() {
    this.audio.play();
    // this.updateTimer = setInterval(this.updateSlider, 1000);
    this.isPlaying = true;
    this.totalDuration();
  }
  pause() {
    // clearInterval(this.updateTimer)
    this.audio.pause();
    this.isPlaying = false;
  }
  seekTo(event) {
    const seekto = this.audio.duration * (event.target.value / 100)
    this.audio.currentTime = seekto;
    this.currentTimeUpdate();
  }
  // seekUpdate() {
  //   let seekPosition = 0;
  //   seekPosition = this.audio.currentTime * (100 / this.audio.duration);
  //   this.currentTime = seekPosition;
  //   let currentMinutes = Math.floor(this.audio.currentTime / 60);
  //   let currentSeconds = Math.floor(this.audio.currentTime - currentMinutes * 60);
  //   let durationMinutes = Math.floor(this.audio.duration / 60);
  //   let durationSeconds = Math.floor(this.audio.duration - durationMinutes * 60);

  //   this.curr_time = `${currentMinutes}:${currentSeconds < 10 ? currentSeconds : "0" + currentSeconds}`;
  //   this.total_duration = `${durationMinutes}:${durationSeconds < 10 ? durationSeconds : "0" + durationSeconds}`;
  // }
  currentTimeUpdate() {
    if (this.audio !== undefined){
      let currentMinutes = Math.floor(this.audio.currentTime / 60);
      let currentSeconds = Math.floor(this.audio.currentTime - currentMinutes * 60);
      this.curr_time = `${currentMinutes}:${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}`;
    }
  }
  totalDuration() {
    let durationMinutes = Math.floor(this.audio.duration / 60);
    let durationSeconds = Math.floor(this.audio.duration - durationMinutes * 60);
    this.total_duration = `${durationMinutes}:${durationSeconds < 10 ? "0" +  durationSeconds : durationSeconds}`;
  }
  resetValues() {
    this.currentTime = 0;
    this.curr_time = "0.00"; 
    this.total_duration = "0.00"; 
  }
  updateSlider() {
    this.currentTime = this.audio.currentTime * (100 / this.audio.duration);
  }
  prevTrack() {
    if (this.currentTrack > 0) {
      this.currentTrack -= 1;
    } else this.currentTrack = this.tracks.length;
    this.pause();
    this.resetValues();
    this.loadTrack(this.tracks[this.currentTrack]);
    this.play();
  }
  nextTrack() {
    if (this.currentTrack < this.tracks.length - 1) this.currentTrack += 1;
    else this.currentTrack = 0;
    this.pause();
    this.resetValues();
    this.loadTrack(this.tracks[this.currentTrack]);
    this.play();
  }
}
