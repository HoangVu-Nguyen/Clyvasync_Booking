import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Active } from './features/auth/active/active';
import { Forgot } from './features/auth/forgot/forgot';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './features/dashboard/dashboard';
import { CallbackComponent } from './features/auth/callback/callback.component';

export const routes: Routes = [
  // 1. NHÓM KHÔNG CÓ LAYOUT (Auth)
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'active', component: Active },
  { path: 'forgot', component: Forgot },
  { path: 'callback', component: CallbackComponent },

  // 2. NHÓM DÙNG MAIN LAYOUT
  {
    path: '',
    component: MainLayout,
    children: [
      // Vào thẳng localhost:4200 -> đá sang localhost:4200/home
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Dashboard, title: 'World Feed - Clyvasync' }
    ]
  },

  // 3. ĐƯỜNG DẪN SAI / RÁC -> ĐÁ VỀ LOGIN (HOẶC 404)
  // !!! LUÔN LUÔN PHẢI ĐỂ CÁI NÀY Ở DÒNG CUỐI CÙNG !!!
  { path: '**', redirectTo: 'login' }
];