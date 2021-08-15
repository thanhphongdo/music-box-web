import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selectedItem = '';
  showAccount: boolean;

  constructor(private router: Router, private sharedService: SharedService) {

  }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {
    this.showAccount = this.sharedService.showAccount;
  }

  openMenuList(item: any) {
    this.selectedItem = item;
    this.sharedService.libraryMenuItem = item;
  }
}
