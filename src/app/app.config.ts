import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import thêm provideHttpClient

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    // 1. Cấu hình HttpClient với Fetch API ở đây
    provideHttpClient(withFetch()), 

    // 2. OAuthClient để trống (hoặc cấu hình Resource Server nếu cần)
    provideOAuthClient(), 

    provideRouter(routes), 
    provideClientHydration(withEventReplay())
  ]
};