import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaData } from '../models/pizza-data';
import { PizzaService } from '../service/pizza.service';
import { RouteService } from '../service/route.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  pizza : Pizza[] = PizzaData;

  constructor(private userService:UserService, private pizzaService: PizzaService, private routeService:RouteService){}

  addToCart(pizza: Pizza) {
    this.pizzaService.cartPizzas.push(pizza);
  }

  goToCart() {
    this.userService.loggedIn();
    this.routeService.navigateToCartView();
  }
}
