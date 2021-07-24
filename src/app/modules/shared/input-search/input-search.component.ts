import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListInterface, SoundCloudUserInterface, TrackInterface } from '@app/models';
import { SoundCloudService } from '@app/services';
import { SharedService } from '@app/services/shared.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  bgLanding: string;
  homeSearch = false;
  tracks: Array<TrackInterface> = [];
  playlists: Array<PlayListInterface> = [];
  people: Array<SoundCloudUserInterface> = [];
  loadData = false;
  name: string;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private soundCloudService: SoundCloudService,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.bgLanding = this.sharedService.bgLanding;
    this.homeSearch = this.sharedService.homeSearch;
  }

  redirect(): void {
    this.router.navigate(['/search']);
  }

  search() {
    forkJoin([
      this.soundCloudService.getTrack(this.name, 10, 0),
      this.soundCloudService.getPlaylist(this.name, 10, 0),
      this.soundCloudService.getPeople(this.name, 10, 0)
    ]).subscribe(([tracks, playlists, people]) => {
      this.sharedService.tracks = tracks.collection;
      this.sharedService.playlists = playlists.collection;
      this.sharedService.people = people.collection;
      this.sharedService.loadData = true;
    })
  }
}
