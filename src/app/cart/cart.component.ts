import { User } from './../users';
import { ShareInfoClass } from './../shareInfoClass';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartItem } from '../shoppingCartItem';
import { UsersService } from '../users.service';
import { Product } from '../Product';
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


  constructor(private router:Router, private userService:UsersService, private shareInfoService:ShareInfoService) {
    this.shoppingCartItems = UsersService.shoppingCartItems;
    this.products = UsersService.products;
    this.user = ShareInfoService.userName;
    this.CheckItems();
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
  public Checkout(){
    this.router.navigate(['/checkout'])
  }
}
