import { Component } from '@angular/core';
import { PizzaService } from '../service/pizza.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(private pizzaService:PizzaService, private userService:UserService) {}

  orderConfirmed() {
    this.userService.userDetails!.pizza = this.pizzaService.cartPizzas;
    this.pizzaService.registerUser(this.userService.userDetails).subscribe(
      response=>{
        console.log(response);
        alert("order confirmed");
        this.pizzaService.cartPizzas = [];
      }
    )
  }

}
