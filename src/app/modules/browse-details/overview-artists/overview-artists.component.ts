import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-artists',
  templateUrl: './overview-artists.component.html',
  styleUrls: ['./overview-artists.component.scss']
})
export class OverviewArtistsComponent implements OnInit {

  @Input() people

  constructor() { }

  ngOnInit(): void {
  }
}
