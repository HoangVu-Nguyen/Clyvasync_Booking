import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://localhost:8443',
  clientId: 'clyvasync-client',
  responseType: 'code',
  
  // offline_access giúp Backend trả về Refresh Token
  scope: 'openid profile email offline_access',
  dummyClientSecret: 'secret-khong-ma-hoa',

  redirectUri: (typeof window !== 'undefined') 
                ? window.location.origin + '/callback' 
                : 'https://localhost:4200/callback',
  


  disablePKCE: false,
  requireHttps: false, 

  // --- THAY ĐỔI CHIẾN THUẬT TẠI ĐÂY ---
  useSilentRefresh: false,        // Tắt Iframe để bỏ qua việc load file .html (giảm 1-2s delay)
  skipIssuerCheck: false,
  strictDiscoveryDocumentValidation: false,
  
  // Tự động làm mới token ngầm khi đang mở tab (không cần F5)
  timeoutFactor: 0.75, 
  sessionChecksEnabled: false,
  
};