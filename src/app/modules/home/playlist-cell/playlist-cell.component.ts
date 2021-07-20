import { Component, OnInit, Input } from '@angular/core';
import { PlayListInterface, TrackInterface } from '@app/models';

@Component({
  selector: 'app-playlist-cell',
  templateUrl: './playlist-cell.component.html',
  styleUrls: ['./playlist-cell.component.scss']
})
export class PlaylistCellComponent implements OnInit {
  // @Input() title: string;
  // @Input() heart: string;  
  @Input() item: TrackInterface | PlayListInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
