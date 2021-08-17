import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-pop-up',
  templateUrl: './listening-pop-up.component.html',
  styleUrls: ['./listening-pop-up.component.scss']
})
export class ListeningPopUpComponent implements OnInit {
  @Input() item: any;
  @Input() id: number;

  milliseconds: any;
  minutes: any;
  seconds: any;
  time: any;

  constructor() { }

  ngOnInit(): void {
    this.milliseconds = this.item.detailInfo.duration;
    this.minutes = Math.floor(this.milliseconds / 60000)
    this.seconds = ((this.milliseconds % 60000) / 1000).toFixed(0);
    this.time = '' + this.minutes + ':' + this.seconds
  }
}
