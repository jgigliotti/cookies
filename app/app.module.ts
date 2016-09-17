import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import { Login } from './login/login.component';
import { Order } from './order/order.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, Login, Order ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
