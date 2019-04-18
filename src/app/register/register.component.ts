import { Component, OnInit } from '@angular/core';
import {User} from'../users';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { GameComponent } from '../game/game.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private userService:UsersService, private dialog: MatDialog) { }
  user: User=new User();
  password: string;
  rePassword: string;
  private fileNameDialogRef: MatDialogRef<GameComponent>;

  ngOnInit() {
  }
  public register(){
    this.user.releaseDate = new Date();
    if(this.password === this.rePassword){
        this.user.password = this.password;
        this.userService.httpPost(this.user);
        alert("Regesiter Successfully");
        this.userService.httpGet();
        this.openDialog();
        // this.router.navigate(['/login']);
    }
    else
      alert("keep the passwords same")
    
  }
  openDialog(): void {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.hasBackdrop = true;
    // console.log(dialogConfig);
    this.fileNameDialogRef = this.dialog.open(GameComponent,{
      hasBackdrop : true,
      autoFocus : true,
      disableClose: true
    });
    

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/login']);
    });
  }
}
