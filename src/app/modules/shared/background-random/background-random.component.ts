import { Component, Input, OnInit } from '@angular/core';
import { PlayListInterface, TrackInterface } from '@app/models';

@Component({
  selector: 'app-background-random',
  templateUrl: './background-random.component.html',
  styleUrls: ['./background-random.component.scss']
})
export class BackgroundRandomComponent implements OnInit {
  @Input() item: TrackInterface | PlayListInterface;
  bgRandom: string;

  constructor() { }

  ngOnInit(): void {
    this.getRandomBackground();
  }

  getRandomBackground() {
    this.bgRandom = ('track-bg-' + Math.floor(Math.random() * 10))
  }
}