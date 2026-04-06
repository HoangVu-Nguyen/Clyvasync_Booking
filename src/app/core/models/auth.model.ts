export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  phoneNumber?: string;
  birthDate?: string; // Định dạng YYYY-MM-DD
  gender?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string; // Token nhận được sau khi đăng ký/đăng nhập
}