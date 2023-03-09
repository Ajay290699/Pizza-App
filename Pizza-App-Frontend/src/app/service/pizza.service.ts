import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http:HttpClient) { }

  cartPizzas: Array<Pizza> = [];

  url:string="http://localhost:8082/api/pizzaService";
  
  // http://localhost:8082/api/pizza-service"

  registerUser(data:any){
    let httpHeader = new HttpHeaders({
      'Authorization' : 'Bearer' +localStorage.getItem("jwttoken")
    });

    let requestOption = {headers : httpHeader}
    alert("Order added");
    return this.http.post(this.url+"/user",data, requestOption);
  }
}
