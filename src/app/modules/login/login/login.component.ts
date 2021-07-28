import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services';
import { SharedService } from '@app/services/shared.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  email!: string;
  password!: string;
  errLogin!: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private sharedService: SharedService) {
    this.sharedService.landingMenu = true
    this.sharedService.bgLanding = "navbar-bg"
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: ['']
    });
  }

  login() {
    if (this.formLogin.invalid) {
      return;
    }

    this.email = this.formLogin.value.email
    this.password = this.formLogin.value.password

    this.userService.login({
      email: this.email,
      password: this.password
    }).subscribe(data => {
      // console.log(data)
      this.router.navigate(['home']);
    }, err => {
      this.errLogin = err;
      this.formLogin.reset({email:this.email})
    })
  }

  loginWithGoogle() {
    this.userService.getGoogleUrl().subscribe(data => {
      // console.log(data.url);
      window.location.href = data.url;
    });
  }
}
