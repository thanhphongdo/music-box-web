import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up-desktop',
  templateUrl: './pop-up-desktop.component.html',
  styleUrls: ['./pop-up-desktop.component.scss']
})
export class PopUpDesktopComponent implements OnInit {
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
