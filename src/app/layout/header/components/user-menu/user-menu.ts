import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Cần thiết để dùng ngClass nếu dùng Angular cũ, hoặc dùng thẳng Tailwind
import { TokenService } from '../../../../core/services/token.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-menu.html'
})
export class UserMenu implements OnInit {
  isOpen = false;

  constructor(private eRef: ElementRef,private tokenService:TokenService,private oauthService:OAuthService) {}
  ngOnInit(): void {

    console.log(this.tokenService.getAccessToken())
    console.log(this.oauthService.getRefreshToken().toString)
  }

  // Hàm chuyển đổi trạng thái Mở/Đóng
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  // Lắng nghe sự kiện click trên toàn bộ Document
  // Nếu click xảy ra bên ngoài thẻ <app-user-menu>, thì đóng popup
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}