import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.scss']
})
export class MyPlaylistComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    this.sharedService.itemActive = "Library";
    this.sharedService.hideOnMobile = true;
    this.sharedService.showAccount = false;
  }

  ngOnInit(): void {
  }

}
