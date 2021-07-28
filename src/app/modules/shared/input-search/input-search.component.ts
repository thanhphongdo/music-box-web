import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  albums: Array<PlayListInterface> = [];
  loadData = false;
  name: string;
  status = false;
  queryParam: string;
  searchName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private soundCloudService: SoundCloudService,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.queryParam = params.q;
        if(this.queryParam) {
          this.getData(this.queryParam)
          this.name = this.queryParam
          this.status = true
        }
      }
    );
  }

  getData(name: string) {
    forkJoin([
      this.soundCloudService.searchTrack(name, 10, 0),
      this.soundCloudService.searchPlaylist(name, 10, 0),
      this.soundCloudService.searchPeople(name, 10, 0),
      this.soundCloudService.searchAlbum(name, 10 ,0)
    ]).subscribe(([tracks, playlists, people, albums]) => {
      this.sharedService.tracks = tracks.collection;
      this.sharedService.playlists = playlists.collection;
      this.sharedService.people = people.collection;
      this.sharedService.albums = albums.collection;
      this.sharedService.loadData = true;
    })
  }

  ngAfterContentChecked() {
    this.bgLanding = this.sharedService.bgLanding;
    this.searchName = this.sharedService.searchName;
  }

  redirect(): void {
    this.router.navigate(['/search']);
  }

  search() {
    this.router.navigate(['/search'], { queryParams: {q: this.name} });
    this.getData(this.name);
    this.sharedService.searchName = '';
  }

  focusEvent() {
    this.status = true;
  }

  focusOutEvent() {
    this.name ?  this.status = true : this.status = false
  }
}
