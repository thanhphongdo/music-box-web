import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services';
import { UserModel } from 'src/app/models/interfaces/user';
import { SharedService } from '@app/services/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formSignup!: FormGroup;
  userInfo: UserModel = new UserModel();

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private sharedService: SharedService) {
    this.sharedService.landingMenu = true;
    this.sharedService.bgLanding = "navbar-bg";
    this.sharedService.hideOnMobile = true;
  }

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      sex: [0, Validators.required]
    });
  }

  signup(){
    if(this.formSignup.invalid) {
      return;
    }

    this.userInfo.username = this.formSignup.value.userName;
    this.userInfo.email = this.formSignup.value.email;
    this.userInfo.password = this.formSignup.value.password;
    this.userInfo.birthDate = this.formSignup.value.dateOfBirth;
    this.userInfo.sex = this.formSignup.value.sex;

    this.userService.signUp(this.userInfo).subscribe(data => {
      console.log(data);
      this.router.navigate(['home']);
    }, err => {
      console.log(err)
    })
  }

  loginWithGoogle() {
    this.userService.getGoogleUrl().subscribe(data => {
      // console.log(data.url);
      window.location.href = data.url;
    });
  }
}
