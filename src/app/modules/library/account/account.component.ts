import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService, private userService: UserService) {
    this.sharedService.itemActive = "Library";
    this.sharedService.landingMenu = false;
    this.sharedService.showAccount = true;
    this.sharedService.hideOnMobile = true;
  }

  ngOnInit(): void {

  }

  logout() {
    this.userService.logout().subscribe()
    this.router.navigate(['/login']);
  }
}
