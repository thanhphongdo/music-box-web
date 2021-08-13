import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-menu-mb',
  templateUrl: './library-menu-mb.component.html',
  styleUrls: ['./library-menu-mb.component.scss']
})
export class LibraryMenuMbComponent implements OnInit {

  menuList = [
    { name: "Playlists", router: "/library/playlists", image: "../../../../assets/images/library/playlists.svg" },
    { name: "Favorite Songs", router: "/library/favorite-songs", image: "../../../../assets/images/library/heart.svg" },
    { name: "Listening History", router: "/library/history", image: "../../../../assets/images/library/history.svg" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
