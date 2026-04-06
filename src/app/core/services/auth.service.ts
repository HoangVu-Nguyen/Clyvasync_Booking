// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequest, AuthResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root' // Service này có thể dùng ở bất cứ đâu
})
export class AuthService {
  private readonly API_URL = 'https://localhost:8443/api/v1/auth'; 

  constructor(private http: HttpClient) {}

  // Hàm gọi đăng ký
  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/register`, data);
  }

  // Hàm gọi verify OTP (nếu cần)
  verifyOTP(email: string, code: string): Observable<any> {
    return this.http.post(`${this.API_URL}/verify-account`, { email, code });
  }
}