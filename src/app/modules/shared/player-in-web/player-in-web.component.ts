import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@app/services';

@Component({
  selector: 'app-player-in-web',
  templateUrl: './player-in-web.component.html',
  styleUrls: ['./player-in-web.component.scss']
})
export class PlayerInWebComponent implements OnInit {
  // volumeValue: number = 99;

  sliderValue: number = 3000;
  sliderOptions: Options = {
    floor: 0,
    ceil: 123000,
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

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getCurrentValue().subscribe(v => {
      this.sliderValue = v;
    })
    this.playerService.durationPublic$.subscribe(d => {
      this.sliderOptions = {
        ...this.sliderOptions,
        ceil: d
      };
    });
  }

  play() {
    this.playerService.playAudio();
  }
  pause() {
    this.playerService.pauseAudio();
  }
  seekTo() {
    this.playerService.seekAudio(Math.floor(this.sliderValue / 1000));
  }
  prevTrack() {
    this.playerService.prevTrack();
  }
  nextTrack() {
    this.playerService.nextTrack();
  }
  setVolume(v: number) {
    this.playerService.setVolume(v);
  }
  replaceNameTrack(name: string, length: number) {
    if (!name) return;
    if (name.length > length) {
      let nameSlice = name.slice(0, length);
      return `${nameSlice}...`;
    } else return name;
  }
}
