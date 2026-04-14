import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../layout/header/header';
import { Footer } from '../../../layout/footer/footer';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { authCodeFlowConfig } from '../../../core/configs/auth.config';
// Chú ý: Không cần import ReactiveFormsModule nữa vì không có form

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './login.html'
})
export class Login {
  
constructor(private oauthService: OAuthService, private router: Router) {
    this.oauthService.configure(authCodeFlowConfig);
  }

  ngOnInit() {
    // Tự động kiểm tra xem có mã 'code' trên URL không
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        console.log('Xác thực thành công!');
        this.router.navigate(['/home']); // Đăng nhập xong thì vào trang chủ
      }
    });
  }

  redirectToOAuth() {
    this.oauthService.initCodeFlow();
  }
}