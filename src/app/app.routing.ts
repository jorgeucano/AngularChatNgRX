import {  Routes } from '@angular/router';
import {WelcomeComponent} from './user/welcome/welcome.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren:  './user/user.module#UserModule' },
  { path: '**', redirectTo: '/login' }
];
