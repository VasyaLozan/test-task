import { Routes } from '@angular/router';
import {authGuard} from "./login/guards/auth.guard";

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'products',
    title: 'Products',
    loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent),
    canActivate: [authGuard]
  },
  {
    path: 'users',
    title: 'Users',
    loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: "full"
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  }
];
