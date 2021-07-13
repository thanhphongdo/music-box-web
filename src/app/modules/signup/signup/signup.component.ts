import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;
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

    $('#datepicker').datepicker().on('changeDate', function (ev) {
      $('#date-daily').change();
    });
    $('#date-daily').val('00-00-0000');
    $('#date-daily').change(function () {
      $('#date-daily').val()
      console.log($('#date-daily').val());
    });
  }

  signup(){
    if(this.formSignup.invalid) {
      return;
    }

    console.log(this.formSignup.value)
  }
}
