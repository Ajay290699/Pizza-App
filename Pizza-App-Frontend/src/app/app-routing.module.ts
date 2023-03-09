import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "menu",
    component: MenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch:'full'
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
