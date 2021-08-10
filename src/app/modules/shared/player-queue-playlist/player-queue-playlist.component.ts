import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-queue-playlist',
  templateUrl: './player-queue-playlist.component.html',
  styleUrls: ['./player-queue-playlist.component.scss']
})
export class PlayerQueuePlaylistComponent implements OnInit {
  queueShow = false;
  items = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14];
  options = {
    onUpdate: (event: any) => {
      console.log(this.items);
    },
    handle: '.handle',
  };
  constructor() { }

  ngOnInit(): void {
  }

  toggleQueueShow(): void {
    this.queueShow = !this.queueShow;
  }
}
