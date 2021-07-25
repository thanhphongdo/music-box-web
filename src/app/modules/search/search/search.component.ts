import { Component, OnInit } from '@angular/core';
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
  searching: boolean;
  loadData = false
  tag: any;
  name: string;

  constructor(
    private sharedService: SharedService,
  ) {
    this.sharedService.homeSearch = true;
    this.sharedService.bgLanding = ""
    this.sharedService.itemActive = "Search"
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.tracks = this.sharedService.tracks;
    this.playlists = this.sharedService.playlists;
    this.people = this.sharedService.people;
    this.loadData = this.sharedService.loadData;
  }
}
