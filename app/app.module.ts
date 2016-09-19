import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import { Login } from './login/login.component';
import { Orders } from './orders/orders.component';
import { Order } from './order/order.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, Login, Orders, Order ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
