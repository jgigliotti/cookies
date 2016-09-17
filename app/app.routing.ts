import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login } from './login/login.component';
import { Order } from './order/order.component';

const routes: Routes = [
  { 
      path: '', component: Login,
      data: { title: 'Order Cookies: Login'} 
  },
  { 
      path: 'order', component: Order,
      data: { title: 'Order Cookies'} 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
