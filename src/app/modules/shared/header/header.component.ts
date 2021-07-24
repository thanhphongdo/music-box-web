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
  homeSearch = false;

  constructor(private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.bgLanding = this.sharedService.bgLanding;
    this.homeSearch = this.sharedService.homeSearch;
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
