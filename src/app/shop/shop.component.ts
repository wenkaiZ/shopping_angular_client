import { ShoppingCartItem } from './../shoppingCartItem';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Product } from '../products';
import { ShareInfoService } from '../share-info.service';

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

  constructor(private router:Router,  
              private userService:UsersService) { 
    this.products = UsersService.products;
    this.userName = ShareInfoService.userName;
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
   
  }
  public Cart(){
    this.router.navigate(['/cart'])
  }
}
