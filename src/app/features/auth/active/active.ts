import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Header } from '../../../layout/header/header';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-active',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, Header, Footer],
  templateUrl: './active.html'
})
export class Active implements OnInit {
  activeForm: FormGroup;
  email: string = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Tạo mảng 6 ô input OTP
    this.activeForm = this.fb.group({
      otpDigits: this.fb.array(new Array(6).fill('').map(() => 
        ['', [Validators.required, Validators.pattern('^[0-9]$')]]
      ))
    });
  }

  get otpArray() {
    return this.activeForm.get('otpDigits') as FormArray;
  }

  ngOnInit() {
    // Lấy email từ state truyền sang từ trang Register
    const state = history.state;
    this.email = state?.email || 'PLAYER@CLYVASYNC.COM'; 
    
    if (!state?.email) {
      console.warn('No email found in state, using fallback.');
    }
  }

  // Tự động nhảy sang ô tiếp theo khi gõ
  onInput(event: any, index: number) {
    const val = event.target.value;
    if (val && index < 5) {
      const inputs = document.querySelectorAll('input');
      inputs[index + 1].focus();
    }
  }

  // Xử lý nút xóa (Backspace) để quay lại ô trước
  onKeyDown(event: any, index: number) {
    if (event.key === 'Backspace' && !this.otpArray.at(index).value && index > 0) {
      const inputs = document.querySelectorAll('input');
      inputs[index - 1].focus();
    }
  }

  onConfirmCode() {
    if (this.activeForm.valid) {
      this.isLoading = true;
      const otpCode = this.activeForm.value.otpDigits.join('');
      
      this.authService.verifyOTP(this.email, otpCode).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          alert('STAGED CLEAR! ACCOUNT ACTIVATED.');
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.isLoading = false;
          alert('ERROR: INVALID CODE');
        }
      });
    }
  }
}