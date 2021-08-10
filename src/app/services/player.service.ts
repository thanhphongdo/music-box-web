import { Injectable } from '@angular/core';
import Hls from 'hls.js';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SoundCloudService } from './sound_cloud.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  public audio: HTMLAudioElement;
  public playlist: any;
  public tracks: any;
  public currentTrack: number = 0;
  public track: any;
  
  private dataLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private value: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private duration: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public hadData$ = this.dataLoaded.asObservable();
  public valuePublic$ = this.value.asObservable();
  public durationPublic$ = this.duration.asObservable();
  
  public isPlayerPage = false;
  private updateValue: any;
  public isPlaying = false;
  public shuffleState = false;
  public repeatState: number = 0;
  public repeated: boolean = false;

  constructor(private soundCloudService: SoundCloudService) {
    this.audio = new Audio();
  }

  public initPlaylist(playlistId: number): void {
    this.soundCloudService.getPlaylistById(playlistId)
      .toPromise()
      .then(data => {
        this.playlist = data;
        this.tracks = this.playlist.tracks;
        this.currentTrack = 0;
        this.track = this.tracks[0];
        this.duration.next(this.track.duration);
        this.dataLoaded.next(true);
        this.initTrack(this.track.id, true);
      })
      .catch(err => {
        console.error(err);
      })
  }
  public initTrack(trackId: number, isPlaying: boolean): void {
    this.pauseAudio();
    this.soundCloudService.getTrackById(trackId)
      .toPromise()
      .then(data => {
        this.track = data;
        // console.log(JSON.stringify(this.track));
        this.duration.next(this.track.duration);
        return this.soundCloudService.getHLS(this.track?.media.transcodings[0]?.url)
          .toPromise()
      })
      .then(data => {
        let hls = new Hls();
        hls.attachMedia(this.audio);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          hls.loadSource(data.url);
        });
        if (isPlaying) this.playAudio();
        this.dataLoaded.next(true);
        this.doEventRepeat();
      })
      .catch(err => {
        console.error(err);
      })
  }

  public prevTrack(): any {
    if (this.currentTrack > 0) {
      this.currentTrack -= 1;
    } else this.currentTrack = this.tracks.length;
    this.track = this.tracks[this.currentTrack];
    this.initTrack(this.track.id, true)
  }
  public nextTrack(): any {
    if (this.shuffleState) {
      this.currentTrack = Math.round(Math.random() * this.tracks.length);
    } else if (this.currentTrack < this.tracks.length - 1) this.currentTrack += 1;
    else this.currentTrack = 0;
    this.track = this.tracks[this.currentTrack];
    this.initTrack(this.track.id, true)
  }

  
  public getAudio(): HTMLAudioElement {
    return this.audio;
  }
  public setAudio(src: string): void {
    this.audio.src = src;
    this.playAudio();
  }
  public playAudio(): void {
    this.audio.play();
    this.updateValue = setInterval(() => {
      this.value.next(this.audio.currentTime * 1000);
    }, 1000);
    this.isPlaying = true;
  }
  public pauseAudio(): void {
    clearInterval(this.updateValue);
    this.audio.pause();
    this.isPlaying = false;
  }
  public seekAudio(position: number): void {
    this.audio.currentTime = position;
  }
  public toggleShuffleState() {
    this.shuffleState = this.shuffleState ? false : true;
  }
  public getDuration(): Observable<number> {
    return this.durationPublic$;
  }
  public getCurrentValue(): Observable<number> {
    return this.valuePublic$;
  }

  public changeRepeatState() {
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
  public resetValues(): void {
    this.value.next(0);
    this.duration.next(0);
  }
  public doEventRepeat() {
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
          this.initTrack(this.track.id, true);
          this.repeated = true;
        }.bind(this);
      }
    } else {
      this.audio.onended = function() {
        this.resetValues();
        this.initTrack(this.track.id, true);
      }.bind(this);
    }
  }
  
  public isPlayerPages() {
    this.isPlayerPage = true;
  }
  public isNotPlayerPages() {
    this.isPlayerPage = false;
  }
}
