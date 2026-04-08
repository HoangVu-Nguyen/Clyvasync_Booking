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
protected isInitialized = signal(false);
  constructor(
    private oauthService: OAuthService,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      
      // 1. Cấu hình Storage & OAuth
      this.oauthService.setStorage(new HybridStorage());
      const baseUrl = window.location.origin;
      this.oauthService.configure({
        ...authCodeFlowConfig,
        redirectUri: baseUrl + '/callback',
        useSilentRefresh: false
      });
      this.oauthService.setupAutomaticSilentRefresh();

      try {
        // 2. Load Discovery Document
        await this.oauthService.loadDiscoveryDocument();

        // LUỒNG A: Xử lý Login Redirect (vừa đăng nhập xong)
        if (window.location.search.includes('code=')) {
          await this.oauthService.tryLogin();
          if (this.oauthService.hasValidAccessToken()) {
            this.tokenService.setAccessToken(this.oauthService.getAccessToken());
            // Clear URL để mất cái ?code=...
            await this.router.navigate([], { queryParams: { code: null, state: null, session_state: null }, queryParamsHandling: 'merge' });
          }
        } 
        // LUỒNG B: Hồi sinh Token sau khi F5
        else if (!this.oauthService.hasValidAccessToken() && this.oauthService.getRefreshToken()) {
          console.log('F5 detected → Đang hồi sinh Access Token từ Cookie...');
          try {
            await this.oauthService.refreshToken();
            this.tokenService.setAccessToken(this.oauthService.getAccessToken());
            console.log('Hồi sinh thành công!');
          } catch (err) {
            console.warn('Refresh Token đã hết hạn hoặc không hợp lệ.');
            // Nếu refresh lỗi, bạn có thể xóa dấu hiệu cookie để lần sau không thử lại
            localStorage.removeItem('has_cookie_token');
          }
        }
      } catch (error) {
        console.error('Lỗi trong quá trình khởi tạo OAuth:', error);
      } finally {
        // LUÔN LUÔN set true ở cuối cùng để app hiển thị giao diện
        this.isInitialized.set(true);
      }
    }
  }
}