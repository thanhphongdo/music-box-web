import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@app/services';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.scss']
})
export class AccountPasswordComponent implements OnInit {
  formUpdatePassword!: FormGroup;
  user = JSON.parse(localStorage.getItem('user'));
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  @ViewChild('closeModal') closeModal!: ElementRef;

  ngOnInit(): void {
    this.formUpdatePassword = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    }, { validator: ConfirmedValidator('newPassword', 'confirmNewPassword') });
  }

  updatePasswordUser() {
    if (this.formUpdatePassword.invalid) {
      return;
    }
    let password = this.formUpdatePassword.value.confirmNewPassword;
    this.userService.updatePasswordUser({ password: password }).subscribe(data => {
      console.log(data)
      this.userService.login({
        email: this.user.email,
        password: password
      }).subscribe();
      this.closeModal.nativeElement.click();
      this.formUpdatePassword.reset();
    }, err => {
      console.log(err)
    })
  }
}
