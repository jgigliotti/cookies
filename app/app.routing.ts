import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login } from './login/login.component';
import { Orders } from './orders/orders.component';

const routes: Routes = [
  { 
      path: '', component: Login,
      data: { title: 'Order Cookies: Login'} 
  },
  { 
      path: 'orders', component: Orders,
      data: { title: 'Order Cookies'} 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
