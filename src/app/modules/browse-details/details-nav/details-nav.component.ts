import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-nav',
  templateUrl: './details-nav.component.html',
  styleUrls: ['./details-nav.component.scss']
})
export class DetailsNavComponent implements OnInit {
  @Input() title

  menuList = ['Overview','Playlists','New release', 'Artist']
  selectedItem: any;

  constructor() { }

  ngOnInit(): void {
  }

  openMenuList(item: any) {
    this.selectedItem = item
  }

}
