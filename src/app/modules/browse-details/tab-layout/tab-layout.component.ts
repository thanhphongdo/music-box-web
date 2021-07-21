import { Component, Input, OnInit } from '@angular/core';
import { PlayListInterface, TrackInterface, UserInterface } from '@app/models';

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent implements OnInit {
  @Input() data: PlayListInterface | TrackInterface | UserInterface

  constructor() { }

  ngOnInit(): void {
  }

}
