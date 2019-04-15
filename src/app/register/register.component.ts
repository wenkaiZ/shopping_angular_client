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

  constructor(private router:Router) { }
  user: User=new User();
  ngOnInit() {
  }
  public Register(){
    this.router.navigate(['/login'])
  }
}
