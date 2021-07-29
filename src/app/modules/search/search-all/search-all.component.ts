import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() getTab = new EventEmitter();

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

  sendTab(tab: any) {
    this.getTab.emit(tab);
  }
}
