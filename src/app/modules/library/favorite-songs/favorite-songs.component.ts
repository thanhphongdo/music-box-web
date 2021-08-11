import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-favorite-songs',
  templateUrl: './favorite-songs.component.html',
  styleUrls: ['./favorite-songs.component.scss']
})
export class FavoriteSongsComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    this.sharedService.itemActive = "Library";
    this.sharedService.hideOnMobile = true;
  }

  ngOnInit(): void {
  }

}
