import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '@app/services';

@Component({
  selector: 'app-player-in-mobile',
  templateUrl: './player-in-mobile.component.html',
  styleUrls: ['./player-in-mobile.component.scss']
})
export class PlayerInMobileComponent implements OnInit {
  @Output() isControlEvent: EventEmitter<boolean> = new EventEmitter<boolean>(false);
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
    this.rebuildSlider();
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

  replaceNameTrack() {
    if (!this.playerService.track.title) return;
    if (this.playerService.track.title.length > 30) {
      let name = this.playerService.track.title.slice(0, 30);
      return `${name}...`;
    } else return this.playerService.track.title;
  }

  rebuildSlider() {
    this.sliderOptions.hideLimitLabels = true;
    this.sliderOptions.hidePointerLabels = true;
    this.sliderOptions.readOnly = true;
  }

  play() {
    this.playerService.playAudio();
    this.isControlEvent.emit(true);
  }
  pause() {
    this.playerService.pauseAudio();
    this.isControlEvent.emit(true);
  }
  next() {
    this.playerService.nextTrack();
    this.isControlEvent.emit(true);
  }

  notControlClick() {
    this.isControlEvent.emit(false);
  }
}
