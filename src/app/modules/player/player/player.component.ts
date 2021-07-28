import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import { TrackInterface, PlayListInterface, playlistResultInterface } from 'src/app/models';
import { SoundCloudService, UserService } from 'src/app/services';
declare var Hls: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playlist: any;
  tracks: any;
  currentTrack: number = 0;
  track: any;
  audio: any;
  dataLoaded: boolean = false;
  isPlaying: boolean = false;
  updateTimer: any;
  repeatState: number = 0;
  repeated: boolean = false;
  shuffleState: boolean = false;

  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 523000,
    autoHideLimitLabels: false,
    animate: false,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      return '#2DCEEF';
    },
    getPointerColor: (value: number): string => {
      return '#2DCEEF';
    },
    translate: (value: number): string => {
      const minute = Math.floor(value / 60000);
      const second = Math.floor((value - (minute * 60000)) / 1000);
      return `${minute}:${second < 10 ? '0' + second : second}`;
    }
  };

  constructor(private soundCloudService: SoundCloudService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getList();
  }
  
  getList() {
    // 127755258
    const playlistId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(playlistId);
    this.soundCloudService
      .getPlaylistById(playlistId)
      .subscribe(result => {
        this.dataLoaded = true;
        this.playlist = result;
        console.log(this.playlist);
        this.tracks = this.playlist.tracks;
        console.log(this.tracks);
        this.track = this.tracks[this.currentTrack];
        this.loadTrack(this.track, false);
    })
  }

  /** Play function */
  loadTrack(track: TrackInterface, isPlaying: boolean) {
    if (this.audio && !this.audio.paused) {
      this.pause();
    }
    if (this.track.media === undefined) {
      this.loadUnavailabeTrack(this.track, isPlaying);
    } else {
      this.soundCloudService.getHLS(track?.media.transcodings[0]?.url).subscribe(data => {
        this.audio = document.createElement('audio');
        let hls = new Hls();
        hls.attachMedia(this.audio);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          hls.loadSource(data.url);
        });
        if (isPlaying) this.play();
        this.doEventRepeat();
      });
      this.totalDuration();
    }
  }
  loadUnavailabeTrack(track: TrackInterface, isPlaying: boolean) {
    this.soundCloudService.getTrackById(track.id).subscribe(data => {
      this.track = data;
      this.totalDuration();
      this.soundCloudService.getHLS(this.track?.media.transcodings[0]?.url).subscribe(data => {
        this.audio = document.createElement('audio');
        let hls = new Hls();
        hls.attachMedia(this.audio);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          hls.loadSource(data.url);
        });
        if (isPlaying) this.play();
        this.doEventRepeat();
      });
    })
  }
  play() {
    this.audio.play();
    this.updateTimer = setInterval(this.updateSlider.bind(this), 1000)
    this.isPlaying = true;
  }
  pause() {
    clearInterval(this.updateTimer)
    this.audio.pause();
    this.isPlaying = false;
  }
  seekTo() {
    this.audio.currentTime = Math.floor(this.value / 1000)
  }
  totalDuration() {
    this.options.ceil = this.track.duration;
  }
  updateSlider() {
    this.value = Math.floor(this.audio.currentTime * 1000);
  }
  prevTrack() {
    if (this.currentTrack > 0) {
      this.currentTrack -= 1;
    } else this.currentTrack = this.tracks.length;
    this.track = this.tracks[this.currentTrack];
    this.loadTrack(this.track, true);
  }
  nextTrack() {
    if (this.shuffleState) {
      this.currentTrack = Math.round(Math.random() * this.tracks.length);
    } else if (this.currentTrack < this.tracks.length - 1) this.currentTrack += 1;
    else this.currentTrack = 0;
    this.track = this.tracks[this.currentTrack];
    this.loadTrack(this.track, true);
  }

  /** repeat function */
  changeRepeatState() {
    switch(this.repeatState) {
      case 0: 
        this.repeatState = 1;
        this.doEventRepeat();
        break;
      case 1:
        this.repeatState = 2;
        this.doEventRepeat();
        break;
      case 2:
        this.repeatState = 0;
        this.doEventRepeat();
    }
  }
  doEventRepeat() {
    if (this.repeatState === 0) {
      this.audio.onended = this.nextTrack.bind(this);
    } else if (this.repeatState === 1) {
      if (this.repeated) {
        this.audio.onended = this.nextTrack.bind(this);
        this.repeatState = 0;
        this.repeated = false;
      } else {
        this.audio.onended = function() {
          this.resetValues();
          this.loadTrack(this.track, true);
          this.repeated = true;
        }.bind(this);
      }
    } else {
      this.audio.onended = function() {
        this.resetValues();
        this.loadTrack(this.track, true);
      }.bind(this);
    }
  }

  /** Mix functoin */
  changeShuffleState() {
    this.shuffleState = this.shuffleState ? false : true;
  }
}
