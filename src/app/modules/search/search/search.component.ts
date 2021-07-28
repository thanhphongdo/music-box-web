import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListInterface, SoundCloudUserInterface, TrackInterface } from '@app/models';
import { SharedService } from '@app/services/shared.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  tracks: Array<TrackInterface> = [];
  playlists: Array<PlayListInterface> = [];
  people: Array<SoundCloudUserInterface> = [];
  albums: Array<PlayListInterface> = [];
  loadData = false
  name: string;
  searchName: string;
  parsedUrl: any;
  baseUrl: any;

  constructor(
    private router: Router,
    private sharedService: SharedService,
  ) {
    this.sharedService.bgLanding = "";
    this.sharedService.itemActive = "Search";
    this.sharedService.landingMenu = false;
    this.sharedService.hideOnMobile = true;
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.tracks = this.sharedService.tracks;
    this.playlists = this.sharedService.playlists;
    this.people = this.sharedService.people;
    this.albums = this.sharedService.albums;
    this.loadData = this.sharedService.loadData;
    this.searchName = this.sharedService.searchName;
    this.name = this.sharedService.paramsSearch;
    this.parsedUrl = new URL(window.location.href);
    this.baseUrl = this.parsedUrl.pathname;
    this.sharedService.searchName = this.baseUrl.slice(8);
  }

  redirect(): void {
    this.router.navigate(['search/all'])
    .then(() => {
      window.location.reload();
    });
  }
}
