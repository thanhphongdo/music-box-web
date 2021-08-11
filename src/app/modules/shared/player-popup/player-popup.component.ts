import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '@app/services';

@Component({
  selector: 'app-player-popup',
  templateUrl: './player-popup.component.html',
  styleUrls: ['./player-popup.component.scss']
})
export class PlayerPopupComponent implements OnInit {
  @Input() show: boolean;
  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  downPlayerPopup(): void {
    this.show = false;
    this.hide.emit(this.show);
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
}
