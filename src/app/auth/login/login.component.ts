import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup | any;

  constructor() {
  }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  showErrorOutputEmail(): string {
    const descriptionForm = this.loginFormGroup?.get('email');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.required) {
        return 'Email is Required';
      }

      if (descriptionForm.errors?.email) {
        return 'Please provide a valid Email Address';
      }
    }
    return "";
  }

  showErrorOutputPassword(): string {
    const descriptionForm = this.loginFormGroup?.get('password');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.required) {
        return 'Password is Required';
      }
    }
    return "";
  }

  loginFormSubmit() {
    console.log(this.loginFormGroup.value)
  }
}
