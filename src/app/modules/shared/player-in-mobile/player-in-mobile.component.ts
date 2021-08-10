import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-in-mobile',
  templateUrl: './player-in-mobile.component.html',
  styleUrls: ['./player-in-mobile.component.scss']
})
export class PlayerInMobileComponent implements OnInit {
  @Input() track: any;
  @Input() sliderValue: number;
  @Input() sliderOptions: Options;
  constructor() { }

  ngOnInit(): void {
    this.rebuildSlider();
  }

  replaceNameTrack() {
    if (this.track.title.length > 30) {
      let name = this.track.title.slice(0, 30);
      return `${name}...`;
    } else return this.track.title;
  }

  rebuildSlider() {
    this.sliderOptions.hideLimitLabels = true;
    this.sliderOptions.hidePointerLabels = true;
    this.sliderOptions.readOnly = true;
  }
}
