import { Component } from '@angular/core';
import { ShareInfoClass } from './shareInfoClass';
import { ShareInfoService } from './share-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular_Client';
  shareInfoClass: ShareInfoClass = new ShareInfoClass();
  loginStatus: Boolean;
  loginUser: string;
  constructor(private router:Router, private shareInfoService:ShareInfoService){
    this.shareInfoService.change.subscribe((shareInfo: ShareInfoClass)=>{
      this.shareInfoClass = shareInfo;
    });

    this.loginStatus = ShareInfoService.logIn;
    this.loginUser = ShareInfoService.userName;

  }

  logOut(){
    this.router.navigate(['/']);
    this.shareInfoClass.logIn = false;
  }
}
