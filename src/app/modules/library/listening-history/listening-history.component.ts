import { Component, OnInit } from '@angular/core';
import { listRecentlyPlayed } from '@app/models';
import { LibraryService } from '@app/services/library.service';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-listening-history',
  templateUrl: './listening-history.component.html',
  styleUrls: ['./listening-history.component.scss']
})
export class ListeningHistoryComponent implements OnInit {
  data!: listRecentlyPlayed;

  constructor(private sharedService: SharedService, private libraryService: LibraryService) {
    this.sharedService.itemActive = "Library";
    this.sharedService.hideOnMobile = true;
    this.sharedService.showAccount = false;
    this.sharedService.libraryMenuItem = 'Listening History';
  }

  ngOnInit(): void {
    this.getListRecentlyPlayed();
  }

  getListRecentlyPlayed() {
    this.libraryService.getListRecentlyPlayed('').subscribe(data => {
      this.data = data;
      console.log(this.data)
    }, err => {
      console.log(err);
    })
  }

}
