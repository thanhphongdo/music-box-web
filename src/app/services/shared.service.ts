import { Injectable } from '@angular/core';
import { PlayListInterface, TrackInterface, UserInterface } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  bgLanding: string;
  homeSearch: boolean;
  tracks: Array<TrackInterface>
  playlists: Array<PlayListInterface>
  people: Array<UserInterface>
  name: string;
  loadData: boolean;
  itemActive: string;

  constructor() {
    this.bgLanding;
    this.homeSearch;
    this.name;
    this.tracks;
    this.playlists;
    this.people;
    this.loadData;
    this.itemActive;
  }
}
