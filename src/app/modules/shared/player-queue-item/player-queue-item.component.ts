import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-queue-item',
  templateUrl: './player-queue-item.component.html',
  styleUrls: ['./player-queue-item.component.scss']
})
export class PlayerQueueItemComponent implements OnInit {
  @Input() item: number;
  constructor() { }

  ngOnInit(): void {
  }

}
