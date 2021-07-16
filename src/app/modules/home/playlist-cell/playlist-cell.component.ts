import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-cell',
  templateUrl: './playlist-cell.component.html',
  styleUrls: ['./playlist-cell.component.scss']
})
export class PlaylistCellComponent implements OnInit {
  @Input() link: string;
  @Input() image: string;
  @Input() title: string;
  @Input() heart: string;
  constructor() { }

  ngOnInit(): void {
  }

}
