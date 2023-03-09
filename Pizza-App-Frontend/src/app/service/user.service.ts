import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userDetails ?: User;
  isLoggedIn:boolean = false;

  constructor(private http:HttpClient) { }

  // url:string = "http://x.x.x.x:8081/api/authService";
  
  url:string = "http://localhost:8081/api/authService";

  
  // https://localhost:8081/api/auth-service

  addUser(data:any){
    alert("User Added");
    return this.http.post(this.url+"/register",data);
  }

  login(data:any){
    return this.http.post(this.url+"/login",data);
  }

  loggedIn(){
    this.isLoggedIn = true;
  }
}
