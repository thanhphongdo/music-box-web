import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {

  tabbarActive: boolean;
  menuList = ['Genres & Moods','New Release','Podcasts']
  selectedItem = this.menuList[0];
  nameGenres: string;

  constructor(private route: ActivatedRoute, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {
    this.tabbarActive = this.sharedService.tabbarActive;
    this.nameGenres = this.sharedService.nameGenres;
  }

  openMenuList(item: any) {
    this.selectedItem = item;
    this.sharedService.tabbarItem = item;
  }
}
