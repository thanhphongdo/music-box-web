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

}
