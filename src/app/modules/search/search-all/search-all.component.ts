import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayListInterface, SoundCloudUserInterface, TrackInterface } from '@app/models';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
  styleUrls: ['./search-all.component.scss']
})
export class SearchAllComponent implements OnInit {

  @Input() tracks: Array<TrackInterface> = [];
  @Input() playlists: Array<PlayListInterface> = [];
  @Input() people: Array<SoundCloudUserInterface> = [];
  @Input() albums: Array<PlayListInterface> = [];

  name: string;
  searchName: string;

  constructor(private sharedService: SharedService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.searchName = this.sharedService.searchName;
    this.name = this.sharedService.paramsSearch;
  }

  searchDetails(searchName: string) {
    this.sharedService.searchName = searchName;
    this.router.navigate(['/search/'+searchName], { queryParams: {q: this.name} });
  }
}
