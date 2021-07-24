import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayListInterface, SoundCloudUserInterface, TrackInterface } from '@app/models';
import { SharedService } from '@app/services/shared.service';
import { SoundCloudService } from 'src/app/services';

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
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private soundCloudService: SoundCloudService,
    private router: Router
  ) {
    this.sharedService.homeSearch = true;
    this.sharedService.bgLanding = ""
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
