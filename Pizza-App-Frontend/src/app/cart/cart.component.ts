import { Component } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../service/pizza.service';
import { RouteService } from '../service/route.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  totalAmount:number = 0;
  isOrderPlaced:boolean = false;

  constructor(public pizzaService:PizzaService, private userService:UserService) {}

  ngOnInit() {
    this.pizzaService.cartPizzas.forEach((pizza:Pizza) => {
      this.totalAmount += pizza.pizzaPrice!;
    });
  }

  orderConfirm() {
    this.userService.userDetails!.pizza = this.pizzaService.cartPizzas;
    this.pizzaService.registerUser(this.userService.userDetails).subscribe(
      response=>{
        console.log(response);
        alert("order received");
        this.isOrderPlaced = true;
        console.log(this.isOrderPlaced);
        this.pizzaService.cartPizzas = [];
        this.totalAmount = 0;
      }
    )
  }

}
