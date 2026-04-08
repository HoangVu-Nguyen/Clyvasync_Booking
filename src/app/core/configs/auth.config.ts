import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://localhost:8443',
  clientId: 'clyvasync-client',
  responseType: 'code',

  scope: 'openid profile email offline_access',
  dummyClientSecret: 'secret-khong-ma-hoa',

  redirectUri: (typeof window !== 'undefined') 
                ? window.location.origin + '/callback' 
                : 'https://localhost:4200/callback',

  postLogoutRedirectUri: 'https://localhost:4200',

  logoutUrl: 'https://localhost:8443/oauth2/logout', // 👈 FIX Ở ĐÂY

  disablePKCE: false,
  requireHttps: false,

  useSilentRefresh: false,
  skipIssuerCheck: false,
  strictDiscoveryDocumentValidation: false,
  timeoutFactor: 0.75,
  sessionChecksEnabled: false,
};