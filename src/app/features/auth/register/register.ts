import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Header } from '../../../layout/header/header';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, Header, Footer],
  templateUrl: './register.html'
})
export class Register {
  registerForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: [''],
      birthDate: ['', [Validators.required]],
      gender: ['MALE']
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator kiểm tra mật khẩu khớp nhau
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onStartAdventure() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          // Bỏ chữ .success nếu API của bạn không trả về trường success: true
          if (res.success) { 
            this.isLoading = false;
            this.router.navigate(['/active'], {
              state: { email: this.registerForm.value.email }
            });
          }
        },
        error: (err) => {
          this.isLoading = false;
          alert('SERVER ERROR: ' + (err.error?.message || 'CONNECTION_FAILED'));
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}