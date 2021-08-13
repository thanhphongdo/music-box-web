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
  user: any;

  constructor(private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.itemActive = this.sharedService.itemActive;
    this.tabbarActive = this.sharedService.tabbarActive;
    this.user = this.sharedService.user;
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
function indexOf(arg0: string): any {
  throw new Error('Function not implemented.');
}

