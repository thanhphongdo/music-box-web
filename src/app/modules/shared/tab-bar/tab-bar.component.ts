import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  active: boolean;
  selectedItem: string;

  tabList = [
    { name: "Home", img: "../../../../assets/images/tab-bar/home.svg", active: "../../../../assets/images/tab-bar/home-active.svg" },
    { name: "Search", img: "../../../../assets/images/tab-bar/search.svg", active: "../../../../assets/images/tab-bar/search-active.svg" },
    { name: "Flow", img: "../../../../assets/images/tab-bar/flow.svg", active: "../../../../assets/images/tab-bar/flow-active.svg" },
    { name: "Library", img: "../../../../assets/images/tab-bar/library.svg", active: "../../../../assets/images/tab-bar/library-active.svg" },
  ]

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.selectedItem = this.sharedService.itemActive;
  }

  openTabList(item: any) {
    this.router.navigate(['/' + item.name.toLowerCase()]);
    this.selectedItem = item.name;
  }
}
