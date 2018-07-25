import {  Routes } from '@angular/router';
import {WelcomeComponent} from './user/welcome/welcome.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren:  './auth/auth.module#AuthModule' },
  { path: '**', redirectTo: '/login' }
];
