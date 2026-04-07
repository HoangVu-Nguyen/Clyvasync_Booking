import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { TokenService } from './core/services/token.service';
import { authCodeFlowConfig } from './core/configs/auth.config';
import { HybridStorage } from './core/configs/hybrid-storage';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App implements OnInit {
  protected readonly title = signal('Clyvasync_Network');

  constructor(
    private oauthService: OAuthService,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      
      // 1. Thiết lập Storage trước (Hybrid: Token ở RAM, Cờ hiệu Cookie ở Local)
      this.oauthService.setStorage(new HybridStorage());

      // 2. Cấu hình OAuth
      const baseUrl = window.location.origin;
      this.oauthService.configure({
        ...authCodeFlowConfig,
        redirectUri: baseUrl + '/callback',
        // TẮT hẳn Silent Refresh Iframe để dùng Refresh Token XHR cho nhanh
        useSilentRefresh: false
      });
      this.oauthService.setupAutomaticSilentRefresh(); // <--- THÊM DÒNG NÀY

      // 3. Quy trình xác thực
      this.oauthService.loadDiscoveryDocument().then(() => {

        // LUỒNG A: Vừa đăng nhập xong và redirect về (URL có ?code=...)
        if (window.location.search.includes('code=')) {
          this.oauthService.tryLogin().then(() => {
            if (this.oauthService.hasValidAccessToken()) {
              this.tokenService.setAccessToken(this.oauthService.getAccessToken());
              this.router.navigate(['/']);
            }
          });
        }

        // LUỒNG B: Bị F5 (Mất RAM), cần "hồi sinh" bằng Refresh Token trong Cookie
        // Điều kiện: RAM trống Token VÀ LocalStorage xác nhận có Cookie (đã sửa trong HybridStorage)
        // LUỒNG B: Bị F5 (Mất RAM), Access Token biến mất nhưng Cookie Refresh Token vẫn còn
        else if (!this.oauthService.hasValidAccessToken()) {

          // Kiểm tra "cờ" trong HybridStorage xem người dùng đã từng login chưa
          if (this.oauthService.getRefreshToken()) {
            console.log('F5 detected → Đang xin lại Access Token mới từ Cookie...');

            // Lệnh này bắn request POST /token âm thầm (chuẩn XHR)
            this.oauthService.refreshToken()
              .then(() => {
                console.log('Hồi sinh thành công! App tiếp tục chạy mượt mà.');
                this.tokenService.setAccessToken(this.oauthService.getAccessToken());
              })
              .catch(err => {
                console.warn('Refresh Token trong Cookie hết hạn hoặc bị lỗi:', err);
                // Chỉ khi không đổi được token mới bắt đăng nhập lại
              //  this.oauthService.initCodeFlow();
              });
          } else {
            // Nếu chưa từng login thì mới đá sang trang login
            //this.oauthService.initCodeFlow();
          }
        }


      });
    }
  }
}