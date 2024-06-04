import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './serviceLogin/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  rememberMe: boolean = false;
email: any;
password: any;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    }
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      };

      this.loginService.login(loginData).subscribe({
        next: response => {
          console.log('Login successful', response);
          if (response.accessToken && response.roles) {
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('userRole', JSON.stringify(response.roles));
            this.router.navigate(['/dashboard']);
          } else {
            console.error('Token or user role missing in response');
          }
        },
        error: error => {
          console.error('Login failed', error);
        }
      });
    }
  }
}

/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './serviceLogin/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  credentials: { email: string, password: string } = { email: '', password: '' };

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Remember Me:', this.rememberMe);
      // Add your registration logic here, like making an HTTP request to register the user
    }
  }
  onLogin(): void {
    this.loginService.login(this.loginForm).subscribe({
      next: response => {
        console.log('Login successful', response);
        if (response.accessToken && response.roles) {
          localStorage.setItem('token', response.accessToken);
          localStorage.setItem('userRole', JSON.stringify(response.roles));
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Token or user role missing in response');
        }
      },
      error: error => {
        console.error('Login failed', error);
      }
    });
  }

  /*onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      };

      this.loginService.login(loginData).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']).then((success: any) => {
            if (success) {
              console.log('Navigation to dashboard successful!');
            } else {
              console.log('Navigation to dashboard failed!');
            }
          });
        },
        error: (error: { error: any; }) => {
          console.error('Login failed', error);
          console.log('Login details', error.error);
        }
      });
    }
  }
}*/
