import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService:UserService, private builder:FormBuilder){}

  userForm = this.builder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  addUser() {

    // let r =  this.userService.addUser(this.userForm.value);
    // console.log(r);
    // alert("user added");


    this.userService.addUser(this.userForm.value).subscribe(
      response=>{
        console.log(response);
        alert("user added");
      }
    )
  }

}
