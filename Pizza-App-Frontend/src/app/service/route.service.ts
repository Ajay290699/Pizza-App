import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  
  constructor(private router: Router) { }

  navigateToLoginView() {
    this.router.navigate(["login"]);
  }

  navigateToMenuView() {
    this.router.navigate(["menu"]);
  }

  navigateToCartView() {
    this.router.navigate(["cart"]);
  }

}
