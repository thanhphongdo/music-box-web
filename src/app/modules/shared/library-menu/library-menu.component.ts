import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-library-menu',
  templateUrl: './library-menu.component.html',
  styleUrls: ['./library-menu.component.scss']
})
export class LibraryMenuComponent implements OnInit {

  tabbarActive: boolean;
  menuList = [
    { name: "Playlists", router: "/library/playlists" },
    { name: "Favorite Songs", router: "/library/favorite-songs" },
    { name: "Listening History", router: "/library/history" }
  ]
  selectedItem = this.menuList[0];


  constructor(private sharedService: SharedService) {
    this.sharedService.libraryMenuItem = 'Playlists';
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {

  }

  openMenuList(item: any) {
    this.selectedItem = item;
    this.sharedService.libraryMenuItem = item;
  }

}
