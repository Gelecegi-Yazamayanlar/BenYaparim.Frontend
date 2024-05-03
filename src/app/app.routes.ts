import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

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
];

export default routes;
