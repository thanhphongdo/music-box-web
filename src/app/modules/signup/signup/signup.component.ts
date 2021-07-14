import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services';
import { UserInterface } from 'src/app/models/interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formSignup!: FormGroup;
  userInfo: UserInterface = new UserInterface();

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: [''],
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
    }, err => {
      console.log(err)
    })
  }
}
