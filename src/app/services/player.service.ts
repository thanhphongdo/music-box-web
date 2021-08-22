import { Injectable } from '@angular/core';
import { PlayListInterface, TrackInterface } from '@app/models';
import Hls from 'hls.js';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlaylistService } from './playlist.service';
import { SoundCloudService } from './sound_cloud.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  public audio: HTMLAudioElement;
  public playlist: any;
  public tracks: any;
  public displayTracks: TrackInterface[] = [];
  public currentTrack: number = 0;
  public track: any;
  public numberOfloaded: number = 0;
  public length: number = 0;

  private dataLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private value: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private duration: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private trackSubject: BehaviorSubject<TrackInterface[]> = new BehaviorSubject<TrackInterface[]>([]);
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private numberOfloadedSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private nextTrackSubject: BehaviorSubject<TrackInterface> = new BehaviorSubject<TrackInterface>({});
  public hadData$ = this.dataLoaded.asObservable();
  public valuePublic$ = this.value.asObservable();
  public durationPublic$ = this.duration.asObservable();
  public tracks$ = this.trackSubject.asObservable();
  public length$ = this.lengthSubject.asObservable();
  public numberOfloaded$ = this.numberOfloadedSubject.asObservable();
  public nextTrack$ = this.nextTrackSubject.asObservable();

  public isPlayerPage = false;
  private updateValue: any;
  public isPlaying = false;
  public shuffleState = false;
  public repeatState: number = 0;
  public repeated: boolean = false;

  constructor(private soundCloudService: SoundCloudService, private playlistService: PlaylistService) {
    this.audio = new Audio();
  }

  public initPlaylist(playlistId: number): void {
    this.displayTracks = [];
    this.soundCloudService.getPlaylistById(playlistId)
      .toPromise()
      .then(data => {
        this.playlist = data;
        this.tracks = this.playlist.tracks;
        this.currentTrack = 0;
        this.numberOfloaded = 0;
        this.track = this.tracks[0];
        this.duration.next(this.track.duration);
        this.dataLoaded.next(true);
        this.initTrack(this.track.id, true);
        this.loadInfoTrack();
      })
      .catch(err => {
        console.error(err);
      })
  }

  public initMyPlaylist(playlistId: any, autoPlaying: boolean = true): void {
    this.displayTracks = [];
    this.playlistService.getMyPlaylistById(playlistId)
      .toPromise()
      .then(data => {
        this.playlist = data;
        this.tracks = this.playlist.tracks;
        this.currentTrack = 0;
        this.numberOfloaded = 0;
        this.track = this.tracks[0];
        this.duration.next(this.track.duration);
        this.dataLoaded.next(true);
        this.initTrack(this.track.id, autoPlaying);
        this.loadInfoTrack();
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

  public playTrack(track: TrackInterface, isPlaying: boolean): void {
    this.pauseAudio();
    this.duration.next(track.duration);
    this.soundCloudService.getHLS(track?.media.transcodings[0]?.url)
      .toPromise()
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

  public loadInfoTrack() {
    const start = this.numberOfloaded;
    const end = this.nextPhase(false);
    const trackNeedLoad = this.tracks.slice(start, end);
    Promise.all([
      ...trackNeedLoad
        .map((track) =>
          this.soundCloudService.getTrackById(track.id).toPromise()
        )
    ]).then(values => {
      this.displayTracks = [...this.displayTracks, ...values];
      this.updateTrackList();
      this.nextPhase(true);
    }).catch(err => {
      console.log(err);
    });
  }

  playSingleTrack(playlist: PlayListInterface, track: TrackInterface) {
    this.initTrack(track.id, true);
    if (!this.playlist) {
      this.playlist = playlist;
      this.tracks = this.playlist.tracks;
      this.currentTrack = this.tracks.findIndex(x=> x.id === track.id);
      this.numberOfloaded = 0;
      this.track = track;
      this.duration.next(this.track.duration);
      this.dataLoaded.next(true);
      this.loadInfoTrack();
    } else {
      if (this.playlist.id !== playlist.id) {   
        this.playlist = playlist;
        this.tracks = this.playlist.tracks;
        this.currentTrack = this.tracks.findIndex(x=> x.id === track.id);
        this.numberOfloaded = 0;
        this.track = track;
        this.duration.next(this.track.duration);
        this.dataLoaded.next(true);
        this.loadInfoTrack();
      }
    }
  }

  public prevTrack(): any {
    if (this.currentTrack > 0) {
      this.currentTrack -= 1;
    } else this.currentTrack = this.displayTracks.length;
    this.track = this.displayTracks[this.currentTrack];
    this.playTrack(this.track, true);
    this.nextTrackInfo();
  }
  public nextTrack(): any {
    if (this.shuffleState) {
      this.nextTrack$.subscribe(track => {
        const index = this.displayTracks.findIndex(t => t.id === track.id);
        this.currentTrack = index;
      });
    } else if (this.currentTrack < this.displayTracks.length - 1) this.currentTrack += 1;
    else this.currentTrack = 0;
    this.track = this.displayTracks[this.currentTrack];
    this.playTrack(this.track, true);
    this.nextTrackInfo();
  }
  public nextTrackInfo(): any {
    let index = this.currentTrack;
    if (this.shuffleState) {
      index = Math.floor(Math.random() * this.displayTracks.length);
    } else if (index < this.displayTracks.length - 1) index += 1;
    else index = 0;
    const trackResult = this.displayTracks[index];
    this.nextTrackSubject.next(trackResult);
  }
  public playThisTrack(item: TrackInterface) {
    this.currentTrack = this.displayTracks.findIndex(track => track.id === item.id);
    console.log(this.currentTrack);
    this.track = this.displayTracks[this.currentTrack];
    this.playTrack(this.track, true);
  }
  public removeTrackOutDisplayTracks(item: TrackInterface) {
    const idx = this.displayTracks.findIndex(track => track.id === item.id);
    this.displayTracks.splice(idx, 1);
    this.updateTrackList();
  }
  public sortableDisplayTracks(oldIndex: number, newIndex: number) {
    if (this.currentTrack === oldIndex) this.currentTrack = newIndex;
    let trackTemp = this.displayTracks[oldIndex];
    this.displayTracks[oldIndex] = this.displayTracks[newIndex];
    this.displayTracks[newIndex] = trackTemp;
    this.updateTrackList();
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
    this.nextTrackInfo();
  }
  public getDuration(): Observable<number> {
    return this.durationPublic$;
  }
  public getCurrentValue(): Observable<number> {
    return this.valuePublic$;
  }

  public changeRepeatState() {
    switch (this.repeatState) {
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
        this.audio.onended = function () {
          this.resetValues();
          this.initTrack(this.track.id, true);
          this.repeated = true;
        }.bind(this);
      }
    } else {
      this.audio.onended = function () {
        this.resetValues();
        this.initTrack(this.track.id, true);
      }.bind(this);
    }
  }
  public nextPhase(isUpdate: boolean = true) {
    let result = this.numberOfloaded;
    if (this.numberOfloaded === this.tracks.length) return;
    else if (this.tracks.length - this.numberOfloaded < 10) {
      result = this.tracks.length;
    } else {
      result += 10;
    }
    if (isUpdate) {
      this.numberOfloaded = result;
      this.numberOfloadedSubject.next(this.numberOfloaded);
    }
    return result;
  }

  public isPlayerPages() {
    this.isPlayerPage = true;
  }
  public isNotPlayerPages() {
    this.isPlayerPage = false;
  }

  public setVolume(value: number) {
    this.audio.volume = value / 100;
  }

  private updateTrackList() {
    this.trackSubject.next(this.displayTracks);
    this.lengthSubject.next(this.displayTracks.length);
    this.nextTrackInfo();
  }
}
