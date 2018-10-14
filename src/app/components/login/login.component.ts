import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // JWT token
  // tslint:disable-next-line
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  constructor(
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  // Submit method
  onSubmit() {
    localStorage.setItem('token', this.token);
    this.router.navigate(['/success']);
    console.log(this.loginForm.get('username').invalid);
    // localStorage.clear();
  }

  // This method builds the form
  buildForm(): void {
    // Build group
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

}
