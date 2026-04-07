import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors, HttpInterceptorFn } from '@angular/common/http';

/** 
 * Interceptor để ép trình duyệt đính kèm Cookie (Refresh Token) 
 * vào mọi request gửi lên Backend của bạn.
 */
export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  // Kiểm tra nếu request gửi tới Backend (8443)
  if (req.url.includes(':8443')) {
    req = req.clone({
      withCredentials: true // Ép gửi Cookie HttpOnly
    });
  }
  return next(req);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    // 1. Cấu hình HttpClient: Kết hợp Fetch và Interceptor để gửi Cookie
    provideHttpClient(
      withFetch(), 
      withInterceptors([credentialsInterceptor])
    ), 

    // 2. OAuthClient
    provideOAuthClient(), 

    provideRouter(routes), 
    provideClientHydration(withEventReplay())
  ]
};