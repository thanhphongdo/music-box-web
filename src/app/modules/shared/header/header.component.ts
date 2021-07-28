import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bgLanding: string;
  landingMenu: boolean;

  constructor(private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.bgLanding = this.sharedService.bgLanding;
    this.landingMenu = this.sharedService.landingMenu;
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
