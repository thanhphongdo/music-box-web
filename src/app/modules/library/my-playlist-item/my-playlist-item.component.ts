import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-playlist-item',
  templateUrl: './my-playlist-item.component.html',
  styleUrls: ['./my-playlist-item.component.scss']
})
export class MyPlaylistItemComponent implements OnInit {
  @Input() item!: any;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

  translateHour(value: any) {
    let hours = Math.floor(value / 3600000 % 24);
    let minutes = Math.floor(value / 60000 % 60);

    return hours + ' hr ' + minutes + ' min';
  }
}
