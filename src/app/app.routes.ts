import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Active } from './features/auth/active/active';
import { Forgot } from './features/auth/forgot/forgot';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './features/dashboard/dashboard';
import { CallbackComponent } from './features/auth/callback/callback.component';
import { HomestayList } from './features/homestay/homestay-list/homestay-list';
import { Discover } from './features/discover/discover';
import { HomestayDetail } from './features/homestay/pages/homestay-detail/homestay-detail';

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
      { path: '', redirectTo: 'discover', pathMatch: 'full' },
      { path: 'homestays', component: HomestayList, title: 'World Feed - Clyvasync' },
      { path: 'discover', component: Discover, title: 'World Feed - Clyvasync' },
      { 
        path: 'homestay/:id', 
        component: HomestayDetail, 
        title: 'Chi tiết Homestay - Clyvasync'
      }
    ]
  },

  // 3. ĐƯỜNG DẪN SAI / RÁC -> ĐÁ VỀ LOGIN (HOẶC 404)
  // !!! LUÔN LUÔN PHẢI ĐỂ CÁI NÀY Ở DÒNG CUỐI CÙNG !!!
  { path: '**', redirectTo: 'login' }
];