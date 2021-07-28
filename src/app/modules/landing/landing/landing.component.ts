import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    this.sharedService.bgLanding = "navbar-bg"
    this.sharedService.landingMenu = true
  }

  ngOnInit(): void {
  }
}
