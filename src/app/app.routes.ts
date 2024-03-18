import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
export const routes: Routes = [
  {
    path: 'trang-chu',
    // component: HomeComponent
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'san-pham',
    // component: ProductComponent
    loadComponent: () => import('./pages/product/product.component').then(c => c.ProductComponent)
  },
  {
    path: '',
    redirectTo: 'trang-chu',
    pathMatch: 'full'
  }
];
