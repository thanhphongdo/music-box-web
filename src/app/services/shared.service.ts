import { Injectable } from '@angular/core';
import { PlayListInterface, TrackInterface, UserInterface } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  bgLanding: string;
  landingMenu: boolean;
  tracks: Array<TrackInterface>
  playlists: Array<PlayListInterface>
  people: Array<UserInterface>
  albums: Array<PlayListInterface>
  name: string;
  loadData: boolean;
  itemActive: string;
  inputValue: string;
  searchName: string;
  tabbarActive: boolean;
  tabbarItem: string;
  nameGenres: string;
  hideOnMobile: boolean;
  paramsSearch: string;
  libraryMenuItem: string;

  constructor() {
    this.bgLanding;
    this.landingMenu;
    this.name;
    this.tracks;
    this.playlists;
    this.people;
    this.loadData;
    this.itemActive;
    this.inputValue;
    this.searchName;
    this.tabbarActive;
    this.tabbarItem;
    this.nameGenres;
    this.hideOnMobile;
    this.paramsSearch;
    this.libraryMenuItem;
  }
}
