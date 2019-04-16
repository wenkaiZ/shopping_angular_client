import { ShoppingCartItem } from './../shoppingCartItem';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Product } from '../Product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[];

  constructor(private router:Router, private userService:UsersService) { 
    this.products = UsersService.products;
  }

  ngOnInit() {
  }
  public Cart(){
    this.router.navigate(['/cart'])
  }
}
