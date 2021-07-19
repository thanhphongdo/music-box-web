import { Component, Input, OnInit } from '@angular/core';
import { PlayListInterface, TrackInterface } from '@app/models';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  @Input() data: TrackInterface | PlayListInterface
  bgRandom: string;

  constructor() { }

  ngOnInit(): void {
    this.getRandomBackground();
  }

  getRandomBackground() {
    this.bgRandom = ('track-bg-' + Math.floor(Math.random() * 10))
  }

}
