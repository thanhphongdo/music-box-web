import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up-song',
  templateUrl: './pop-up-song.component.html',
  styleUrls: ['./pop-up-song.component.scss']
})
export class PopUpSongComponent implements OnInit {
  @Input() item: any;
  @Input() id: number;

  milliseconds: any;
  minutes: any;
  seconds:any;
  time: any;

  constructor() { }

  ngOnInit(): void {
    this.milliseconds = this.item.duration;
    this.minutes = Math.floor(this.milliseconds / 60000)
    this.seconds = ((this.milliseconds % 60000) / 1000).toFixed(0);
    this.time = '' + this.minutes + ':' + this.seconds
  }
}
