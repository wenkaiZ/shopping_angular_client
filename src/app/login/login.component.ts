import { Component, OnInit } from '@angular/core';
import {User} from'../users';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ShareInfoClass } from './../shareInfoClass';
import { ShareInfoService } from './../share-info.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Authentication: boolean = false;
  shareInfoClass: ShareInfoClass = new ShareInfoClass;
  private items: Array<User> = [];
  constructor(private router : Router, private userService:UsersService, private shareInfoService:ShareInfoService) {
    this.user={
      ID : null,
      UserName:"",
      ReleaseDate:"",
      Password:"",
    }
   }
  user: User=new User();
  ngOnInit() {
  }
  public UsersLogin() {

    // console.log(this.user.account);
    // if(this.user.UserName=="")
    //   {
    //     alert("please input user");
    //     return;
    //   }
    // else if(this.user.Password == ""){
    //   alert("please input password");
    //     return;
    // }
    // this.userService.Login().subscribe(users =>{ 
      
    //   console.log(users)
    //   if(users !==null){
    //     //share username and log in status
    //     this.user = users;
    //     this.shareInfoClass.logIn = true;
    //     this.shareInfoClass.UserName = this.user.UserName;
    //     this.shareInfoService.change.emit(this.shareInfoClass);
    //     this.Authentication=true;
        
    //   }
    //   else{
    //     alert("invalid password");
    //   }
    // }
    // );
      
    this.router.navigate(['/shop'])
  }
  public register(){
    this.router.navigate(['/register'])
  }
}
