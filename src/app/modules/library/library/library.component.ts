import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  libraryMenuItem: string;

  constructor(private sharedService: SharedService) {
    this.sharedService.bgLanding = "";
    this.sharedService.itemActive = "Library";
    this.sharedService.landingMenu = false;
    this.sharedService.hideOnMobile = true;
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.libraryMenuItem = this.sharedService.libraryMenuItem;
  }
}
