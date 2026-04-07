import { OAuthStorage } from 'angular-oauth2-oidc';

export class HybridStorage implements OAuthStorage {
  private mem = new Map<string, string>();

  getItem(key: string): string | null {
    // 1. Access Token & ID Token: Lấy từ RAM
    if (key.includes('access_token') || key.includes('id_token')) {
      return this.mem.get(key) || null;
    }
    
    // 2. Refresh Token: Trả về giá trị giả để kích hoạt request POST lên Server
    // Server sẽ tự đọc Token thật từ Cookie HttpOnly
    if (key.includes('refresh_token')) {
      return localStorage.getItem('has_cookie_token') ? 'true' : null;
    }

    // 3. Các mã bảo mật (nonce, PKCE): Lấy từ LocalStorage để sống sót khi F5
    return localStorage.getItem(key);
  }

  setItem(key: string, data: string): void {
    if (key.includes('access_token') || key.includes('id_token')) {
      this.mem.set(key, data);
    } else if (key.includes('refresh_token')) {
      // Chỉ đánh dấu sự tồn tại, không lưu nội dung Token vào LocalStorage
      localStorage.setItem('has_cookie_token', 'true');
    } else {
      localStorage.setItem(key, data);
    }
  }

  removeItem(key: string): void {
    // Sửa lỗi sai tên biến memStorage -> mem
    this.mem.delete(key);
    localStorage.removeItem(key);
    
    // Nếu logout, xóa luôn dấu hiệu Cookie
    if (key.includes('refresh_token')) {
      localStorage.removeItem('has_cookie_token');
    }
  }
}