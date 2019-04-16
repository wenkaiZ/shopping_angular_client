import { Component, OnInit } from '@angular/core';
import {User} from'../users';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ShareInfoService } from './../share-info.service';
import { ShareInfoClass } from '../shareInfoClass';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private users: Array<User> = [];
  user: User = new User();
  newUser: User = new User();
  shareInfoClass: ShareInfoClass = new ShareInfoClass();

  constructor(private router : Router, private userService:UsersService, private shareInfoService:ShareInfoService) {
    this.userService.httpGet();
  }

  ngOnInit() {
  }

  public async UsersLogin() {
    this.userService.httpGet();

    if(this.user.userName==null)
      {
        alert("please input user name");
        return;
      }
    else if(this.user.password ==null){
      alert("please input password");
        return;
    }
    /** Check getting all users*/
    if(UsersService.users != null){
      console.log("input username: "+this.user.userName);
      UsersService.users.forEach(element => {
        //console.log("get username: "+element.userName);
        /** Check userName & password*/
        if(element.userName==this.user.userName&&element.password==this.user.password){
          ShareInfoService.logIn = true;
          ShareInfoService.userName = this.user.userName;
          this.shareInfoClass.logIn = true;
          this.shareInfoClass.userName = this.user.userName;
          this.shareInfoService.change.emit(this.shareInfoClass);
        }
      }
      );
      if(!ShareInfoService.logIn){
        alert("Invalid username or password!");
      }
      else
        this.router.navigate(['/shop'])
    }
    
  }
  public register(){
    this.router.navigate(['/register'])
  }
}
