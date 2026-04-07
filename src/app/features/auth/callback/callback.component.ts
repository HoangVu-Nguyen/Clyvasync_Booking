import { Component, OnInit, Inject, PLATFORM_ID, CSP_NONCE } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { authCodeFlowConfig } from '../../../core/configs/auth.config';
import { TokenService } from '../../../core/services/token.service';
@Component({
  standalone: true,
  template: `
    <div style="text-align: center; margin-top: 50px; font-family: sans-serif;">
      <h2>Đang xác thực tài khoản...</h2>
      <div class="loader"></div> <p>Vui lòng không tắt trình duyệt.</p>
    </div>
  `,
  styles: [`
    .loader {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 40px; height: 40px;
      animation: spin 2s linear infinite;
      margin: 20px auto;
    }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  `]
})
export class CallbackComponent implements OnInit {
  constructor(
    private oauthService: OAuthService, 
    private router: Router,
    private tokenService: TokenService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Không làm gì cả! 
    // Mọi logic xác thực hãy để App Component xử lý.
    // Nếu sau 5 giây mà App Component chưa đá đi đâu thì mới cứu nét (fail-safe)
    setTimeout(() => {
      if (!this.oauthService.hasValidAccessToken()) {
         this.router.navigate(['/login']);
      }
    }, 5000);
  }
}