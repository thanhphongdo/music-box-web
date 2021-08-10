import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-in-web',
  templateUrl: './player-in-web.component.html',
  styleUrls: ['./player-in-web.component.scss']
})
export class PlayerInWebComponent implements OnInit {
  @Input() track: any;
  @Input() sliderValue: number;
  @Input() sliderOptions: Options;
  constructor() { }

  ngOnInit(): void {
    console.log(this.track);
    console.log(this.sliderOptions);
  }

}
