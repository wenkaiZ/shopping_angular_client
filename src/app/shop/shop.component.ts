import { ShoppingCartItem } from './../shoppingCartItem';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Product } from '../products';
import { ShareInfoService } from '../share-info.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];
  userName: string;
  productName: string;
  shoppingCartItem: ShoppingCartItem = new ShoppingCartItem();
  private fileNameDialogRef: MatDialogRef<GameComponent>;
  constructor(private router:Router,  
              private userService:UsersService,
              private dialog: MatDialog) { 
    this.products = UsersService.products;
    this.userName = ShareInfoService.userName;
    this.userService.httpGetShoppingCartItems();
  }

  ngOnInit() {
  }
  public async addItem(event){
    this.productName =event.target.name;
    console.log(document.getElementById("_ProductName"));
    console.log(this.productName);
    this.shoppingCartItem.productName = this.productName;
    this.shoppingCartItem.userId = this.userName;
    await this.userService.httpPostItem(this.shoppingCartItem);
    setTimeout(() => {
      this.userService.httpGetShoppingCartItems();
    }, 100);
    //alert("Add successfully!!!");
  }
  openDialog(): void {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.hasBackdrop = true;
    // console.log(dialogConfig);
    this.fileNameDialogRef = this.dialog.open(GameComponent,{
      hasBackdrop : true,
      autoFocus : true,
      disableClose: false
    });
    

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/cart']);
    });
  }
  public Cart(){
    //this.router.navigate(['/cart']);

    this.openDialog();
  }
}
