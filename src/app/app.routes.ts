import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'signup',
    loadComponent: () => import('./components/create-account/create-account.component').then((m) => m.SignupComponents),
  },
  {
    path: 'signin',
    loadComponent: () => import('./components/create-account/create-account.component').then((m) => m.SigninComponents),
  },
];
