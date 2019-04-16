import { User } from './../users';
import { ShareInfoClass } from './../shareInfoClass';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartItem } from '../shoppingCartItem';
import { UsersService } from '../users.service';
import { Product } from '../products';
import { ShareInfoService } from '../share-info.service';

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


  constructor(private router:Router, private userService:UsersService) {
    this.shoppingCartItems = UsersService.shoppingCartItems;
    this.products = UsersService.products;
    this.user = ShareInfoService.userName;
    this.userService.httpGetShoppingCartItems();
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
}
