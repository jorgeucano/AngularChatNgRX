import {  Routes } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

export const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/' }
]
