import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './serviceRegister/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numberPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
      // Add your registration logic here, like making an HTTP request to register the user
    }
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const registerData = {
        firstname: this.registerForm.get('firstname')?.value,
        lastname: this.registerForm.get('lastname')?.value,
        email: this.registerForm.get('email')?.value,
        numberPhone: this.registerForm.get('numberPhone')?.value,
        password: this.registerForm.get('password')?.value
      };
  
      this.registerService.register(registerData).subscribe({
        next: (response: any) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']).then((success: any) => {
            if (success) {
              console.log('Navigation to login successful!');
            } else {
              console.log('Navigation to login failed!');
            }
          });
        },
        error: (error: { error: any; }) => {
          console.error('Registration failed', error);
          console.log('Registration details', error.error);
        }
      });
    }
  }
}  