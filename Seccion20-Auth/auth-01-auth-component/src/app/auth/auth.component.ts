import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService
  ) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      // ..
    } else {
      this.authService.signup(email, password)
        .subscribe(respData => {
          this.isLoading = false;
          console.log(respData);
        }, error => {
          this.isLoading = false;
          this.error = 'An error occurr';
          console.log(error);
        })
    }
    form.reset()
  }
}
