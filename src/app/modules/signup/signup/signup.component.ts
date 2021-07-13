import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formSignup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: [''],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  signup(){
    if(this.formSignup.invalid) {
      return;
    }

    console.log(this.formSignup.value)
  }
}
