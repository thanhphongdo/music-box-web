import { Component, Input, OnInit } from '@angular/core';
import { TrackInterface } from '@app/models';
import { OverlayscrollbarsModule } from 'ngx-overlayscrollbars';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  @Input() tracks: TrackInterface;
  bgRandom: string;

  constructor() { }

  ngOnInit(): void {
    this.getRandomBackground();
  }

  getRandomBackground() {
    this.bgRandom = ('track-bg-' + Math.floor(Math.random() * 10))
  }
}
