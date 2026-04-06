// src/app/auth.config.ts
export const authCodeFlowConfig = {
  issuer: 'https://localhost:8443',
  // Nếu đang ở server thì để trống hoặc giá trị mặc định, nếu ở browser thì lấy origin
  redirectUri: (typeof window !== 'undefined') 
                ? window.location.origin + '/callback' 
                : 'http://localhost:4200/callback',
  clientId: 'my-client-frontend',
  responseType: 'code',
  
  scope: 'openid profile email',
  disablePKCE: false,
  requireHttps: false,
};