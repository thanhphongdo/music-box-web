import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { PlayerService } from '@app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit {
  dataLoaded: Observable<boolean> = this.playerService.hadData$;
  value:number = 1;
  options: Options = {
    floor: 0,
    ceil: 0,
    animate: false,
    showSelectionBar: true,
    autoHideLimitLabels: false,
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
    this.totalDuration();
    this.playerService.getCurrentValue().subscribe(v => {
      this.value = v;
    });
  }
  
  play() {
    this.playerService.playAudio();
  }
  pause() {
    this.playerService.pauseAudio();
  }
  next() {
    this.playerService.nextTrack();
  }
  prev() {
    this.playerService.prevTrack();
  }
  totalDuration() {
    this.playerService.getDuration().subscribe(d => {
      this.options.ceil = d;
    })
  }
  seekTo() {
    this.playerService.seekAudio(Math.floor(this.value / 1000))
  }
}
