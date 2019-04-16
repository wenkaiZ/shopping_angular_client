import { ShoppingCartItem } from './shoppingCartItem';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './users';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /** Store all users' info */
  public static users: User[];
  /** Store all products' info */
  public static products: Product[];
  public static shoppingCartItems: ShoppingCartItem[];

  /** Share database's Url */
  requestUrl:string='https://webstoreapp.azurewebsites.net';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
  };
  constructor(private http:HttpClient) { 
    this.httpGet();
    this.httpGetProducts();
    this.httpGetShoppingCartItems();
  }

  /** Get all users' info */
  httpGet(){
    this.http.get<User[]>(this.requestUrl+"/api/users").subscribe(data=>{
      UsersService.users = data;
      console.log(UsersService.users)
    });
  }
  /** Post a new user's registation*/
  httpPost(content) {
    this.http.post(this.requestUrl+"/api/Users/Create", content, this.httpOptions)
    .subscribe(
      val => {
        console.log('post successfully', val);
      },
      error => {
        console.log('fail to post', error);
      }
    );
  }

  /** Get all products' info */
  httpGetProducts(){
    this.http.get<Product[]>(this.requestUrl+"/products/Get").subscribe(data=>{
      UsersService.products = data;
      console.log(UsersService.products)
    });
  }

  /** Get all shoppingCartItem' info */
  httpGetShoppingCartItems(){
    this.http.get<ShoppingCartItem[]>(this.requestUrl+"/shoppingcartitem/Get").subscribe(data=>{
      UsersService.shoppingCartItems = data;
      console.log("this is cart: "+UsersService.shoppingCartItems)
    });
  }
}