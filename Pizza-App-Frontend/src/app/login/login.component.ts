import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouteService } from '../service/route.service';


import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService, private builder:FormBuilder, private routeService: RouteService){}

  resData:any;
  loginForm=this.builder.group({
    email:['',[Validators.required, Validators.minLength(5)]],
    password:['',[Validators.required, Validators.minLength(6)]]
  })

  // get email(){
  //   return this.loginForm.get('email');
  // }

  // get password(){
  //   return this.loginForm.get('password');
  // }

  loginCheck() {
  //  this.resData = this.userService.login(this.loginForm.value);
  //  localStorage.setItem("jwttoken", this.resData.token);

    this.userService.login(this.loginForm.value).subscribe(
      response=>{
        this.userService.userDetails = {
          email: this.loginForm.value.email!,
          password: this.loginForm.value.password!
        };
        this.userService.loggedIn();

        console.log(response);  // message + token
        this.resData=response;
        console.log(this.resData.token);
        localStorage.setItem("jwttoken", this.resData.token);
        this.routeService.navigateToMenuView();
        alert("login successful");
      }
    )
  }

}
