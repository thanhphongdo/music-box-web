import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import { PlayerService } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  dataLoaded: Observable<boolean> = this.player.hadData$;

  value: number = 1;
  options: Options = {
    floor: 0,
    ceil: 0,
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

  constructor(
    private route: ActivatedRoute,
    public player: PlayerService
    ) { }
  
  ngOnInit(): void {
    this.loadData();
    this.totalDuration();
    this.player.getCurrentValue().subscribe(v => {
      this.value = v;
    })
  }
  
  loadData() {
    // 127755258
    const playlistId = Number(this.route.snapshot.paramMap.get('id'));
    this.player.initPlaylist(playlistId)
  }

  play() {
    this.player.playAudio();
  }
  pause() {
    this.player.pauseAudio();
  }
  seekTo() {
    this.player.seekAudio(Math.floor(this.value / 1000))
  }
  totalDuration() {
    this.player.getDuration().subscribe(d => {
      this.options.ceil = d;
    })
  }
  prevTrack() {
    this.player.prevTrack();
  }
  nextTrack() {
    this.player.nextTrack();
  }
}
