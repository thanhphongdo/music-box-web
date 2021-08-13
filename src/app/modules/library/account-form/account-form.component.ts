import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/services';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  formUpdate!: FormGroup;
  user = JSON.parse(localStorage.getItem('user'));
  userInfo!: any;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.sharedService.itemActive = "Library";
    this.sharedService.landingMenu = false;
    this.sharedService.showAccount = true;
    this.sharedService.hideOnMobile = true;
  }

  ngOnInit(): void {
    this.formUpdate = this.formBuilder.group({
      email: ['', Validators.required],
      userName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      sex: [0, Validators.required]
    });
    this.getCurrentUser();
  }

  updateUser() {
    let user = {
      username: this.formUpdate.value.userName,
      birthDate: this.formUpdate.value.dateOfBirth,
      sex: this.formUpdate.value.sex
    }
    this.userService.updateUser(user).subscribe(data => {
      console.log(data)
      this.getCurrentUser()
    }, err => {
      console.log(err)
    })
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(data => {
      this.userInfo = data;
      this.formUpdate.get('userName').setValue(this.userInfo.username);
      this.formUpdate.get('email').setValue(this.user.email);
      this.formUpdate.get('dateOfBirth').setValue(this.userInfo.birthDate);
      this.formUpdate.get('sex').setValue(this.userInfo.sex);
    }, err => {
      console.log(err)
    })
  }

  logout() {
    this.userService.logout().subscribe()
    this.router.navigate(['/login']);
  }

}
