import { User } from './../users';
import { ShareInfoClass } from './../shareInfoClass';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartItem } from '../shoppingCartItem';
import { UsersService } from '../users.service';
import { Product } from '../products';
import { ShareInfoService } from '../share-info.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCartItems: ShoppingCartItem[];
  userItems: ShoppingCartItem[] = new Array();
  products: Product[];
  user: string;

  private fileNameDialogRef: MatDialogRef<GameComponent>;

  constructor(private router:Router, private userService:UsersService, private dialog: MatDialog) {
    this.userService.httpGetShoppingCartItems();
    this.shoppingCartItems = UsersService.shoppingCartItems;
    this.products = UsersService.products;
    this.user = ShareInfoService.userName;
    // this.openDialog();
    setTimeout(() => {
      this.CheckItems();
    }, 100);
    
   }

   
  ngOnInit() {
  }
  public CheckItems(){
    this.shoppingCartItems.forEach(element => {
      if(element.userId==this.user){
        this.userItems.push(element);
      }
    });
  }
  public deleteItem(event){
    console.log(event.target.name);
    var id = event.target.name;
    this.userService.httpDeleteOneItem(id);
  }
  public Checkout(){
    this.router.navigate(['/payment'])
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
      console.log('The dialog was closed');
    });
  }
}
