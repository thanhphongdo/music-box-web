import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  bgLanding: string;
  homeSearch = false;
  itemActive: string;
  tabbarActive: boolean;

  constructor(private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.itemActive = this.sharedService.itemActive;
    this.tabbarActive = this.sharedService.tabbarActive;
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
