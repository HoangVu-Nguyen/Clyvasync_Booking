import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user/user.service';
import { AuthConfig, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { UserHeaderResponse } from '../../../../core/models/response/user-header.response';
import { authCodeFlowConfig } from '../../../../core/configs/auth.config';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile implements OnInit {
  userHeaderResponse!: UserHeaderResponse;
  isOpen = false;

  constructor(private eRef: ElementRef,private oauthService: OAuthService, private userService: UserService, private cdr: ChangeDetectorRef, private storage: OAuthStorage) {

  }
  ngOnInit(): void {

    console.log(this.oauthService.getAccessToken())
    console.log(this.oauthService.getRefreshToken())
    if (this.oauthService.hasValidAccessToken()) {
      this.userService.getHeaderInfo().subscribe({
        next: (res) => {
          if (res.success) {
            this.userHeaderResponse = res.data;
            this.cdr.detectChanges();

          }
        }
      }


      )
    }
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
    logout() {
    // 1. Lấy ID Token trực tiếp từ HybridStorage (đang nằm trong RAM)
    const idToken = this.oauthService.getIdToken();

    if (!idToken) {
      console.warn("Không tìm thấy ID Token trong RAM, có thể bạn đã F5 hoặc mất session");
    }

    // 2. Cấu hình các tham số logout
    const postLogoutUri = authCodeFlowConfig.postLogoutRedirectUri ?? window.location.origin; // default to current origin if undefined
    const encodedPostLogout = encodeURIComponent(postLogoutUri);
    const encodedIdToken = encodeURIComponent(idToken ?? '');
    const logoutUrl = `https://localhost:8443/connect/logout?id_token_hint=${encodedIdToken}&post_logout_redirect_uri=${encodedPostLogout}`;

    // 3. Xóa sạch dấu vết ở Client (Access Token trong RAM, Cookie Flag ở LocalStorage)
    this.oauthService.logOut(true);
    localStorage.removeItem('has_cookie_token');

    // 4. Chuyển hướng thủ công sang Server xác thực
    window.location.href = logoutUrl;
  }
}
