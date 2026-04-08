import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Cần thiết để dùng ngClass nếu dùng Angular cũ, hoặc dùng thẳng Tailwind
import { TokenService } from '../../../../core/services/token.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { UserPhotoService } from '../../../../core/services/media/user-photo.service';
import { UserService } from '../../../../core/services/user/user.service';
import { UserHeaderResponse } from '../../../../core/models/response/user-header.response';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-menu.html'
})
export class UserMenu implements OnInit {
  isOpen = false;
  userHeaderResponse!: UserHeaderResponse;

  constructor(private eRef: ElementRef, private tokenService: TokenService, private oauthService: OAuthService, private userService: UserService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {

    console.log(this.oauthService.getAccessToken())
    console.log(this.oauthService.getRefreshToken())
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
    this.oauthService.logOut();
  }
}