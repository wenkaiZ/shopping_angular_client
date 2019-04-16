import { Component, OnInit } from '@angular/core';
import {User} from'../users';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private userService:UsersService) { }
  user: User=new User();
  password: string;
  rePassword: string;
  ngOnInit() {
  }
  public register(){
    this.user.releaseDate = new Date();
    if(this.password === this.rePassword){
        this.user.password = this.password;
        this.userService.httpPost(this.user);
        alert("Regesiter Successfully");
        this.userService.httpGet();
        this.router.navigate(['/login'])
    }
    else
      alert("keep the passwords same")
    
  }
}
