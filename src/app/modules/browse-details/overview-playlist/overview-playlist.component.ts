import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-playlist',
  templateUrl: './overview-playlist.component.html',
  styleUrls: ['./overview-playlist.component.scss']
})
export class OverviewPlaylistComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
