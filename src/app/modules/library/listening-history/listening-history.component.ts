import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-listening-history',
  templateUrl: './listening-history.component.html',
  styleUrls: ['./listening-history.component.scss']
})
export class ListeningHistoryComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    this.sharedService.itemActive = "Library";
    this.sharedService.hideOnMobile = true;
  }

  ngOnInit(): void {
  }

}
