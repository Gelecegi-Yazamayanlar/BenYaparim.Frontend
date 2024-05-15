import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/auth/settings/settings.component';
import { FreelancerOlComponent } from './pages/freelancer-ol/freelancer-ol.component';
import { KimyaparComponent } from './pages/kimyapar/kimyapar.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WalletComponent } from './pages/wallet/wallet.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'Settings',
  },
  {
    path: 'kimyapar',
    component: KimyaparComponent,
    title: 'Kim Yapar',
  },
  {
    path: 'orders',
    component: OrdersComponent,
    title: 'Siparişlerim',
  },
  {
    path: 'wallet',
    component: WalletComponent,
    title: 'Cüzdan',
  },
  {
    path: 'freelancerOl',
    component: FreelancerOlComponent,
    title: 'Freelancer Ol',
  },
];

export default routes;
