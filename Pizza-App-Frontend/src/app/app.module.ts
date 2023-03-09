import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    MenuComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule, MatIconModule,MatButtonModule, MatFormFieldModule,MatCardModule,MatInputModule,
    FormsModule, ReactiveFormsModule,MatGridListModule,HttpClientModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
