import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Dùng để gọi API
import { Observable } from 'rxjs';
import e from "express";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class TokenService {
  private apiUrl = environment.apiBaseUrl; // URL gốc của Backend API, ví dụ: http://localhost:8080/api
  constructor(private http: HttpClient) { }

refreshToken(deviceId: string, email: string, idUser: number): Observable<any> {
  return this.http.post(
    `${this.apiUrl}/refresh-token`,
    { deviceId, email, idUser },   // body
    { withCredentials: true }      // cookie refreshToken sẽ tự động được gửi kèm
  );
}

  private accessToken: string | null = null;

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  clear() {
    this.accessToken = null;
  }


}