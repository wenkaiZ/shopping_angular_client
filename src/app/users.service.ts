import { Payment } from './payments';
import { ShoppingCartItem } from './shoppingCartItem';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './users';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './products';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /** Store all users' info */
  public static users: User[];
  /** Store all products' info */
  public static products: Product[];
  public static shoppingCartItems: ShoppingCartItem[];
  public static paymentInfo: Payment[];

  /** Share database's Url */
  requestUrl:string='https://webstoreapp.azurewebsites.net';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
  };
  constructor(private router:Router, private http:HttpClient) { 
    this.httpGet();
    this.httpGetProducts();
    this.httpGetShoppingCartItems();
    this.httpGetPaymentInfo();
  }

  /** Get all users' info */
  async httpGet(){
    await this.http.get<User[]>(this.requestUrl+"/api/users").subscribe(data=>{
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
  async httpGetProducts(){
    await this.http.get<Product[]>(this.requestUrl+"/products/Get").subscribe(data=>{
      UsersService.products = data;
      console.log(UsersService.products)
    });
  }

  /** Get all shoppingCartItem' info */
  async httpGetShoppingCartItems(){
    await this.http.get<ShoppingCartItem[]>(this.requestUrl+"/shoppingcartitem/Get").subscribe(data=>{
      UsersService.shoppingCartItems = data;
      console.log(UsersService.shoppingCartItems)
    });
  }

  /** Post a new shopping cart item*/
  httpPostItem(content) {
    this.http.post(this.requestUrl+"/ShoppingCartItem/Create", content, this.httpOptions)
    .subscribe(
      val => {
        console.log('post successfully', val);
      },
      error => {
        console.log('fail to post', error);
      }
    );
  }

  /** Delete a shopping cart item*/
  httpDeleteOneItem(content) {
    this.http.post(this.requestUrl+"/ShoppingCartItem/DeleteOne/"+content, content, this.httpOptions)
    .subscribe(
      val => {
        console.log('post successfully', val);
        this.router.navigate(['/cart'])
      },
      error => {
        console.log('fail to post', error);
        this.router.navigate(['/cart'])
      }
    );
  }

/** Get all payments' info */
async httpGetPaymentInfo(){
  await this.http.get<Payment[]>(this.requestUrl+"/paymentinfo/Get").subscribe(data=>{
    UsersService.paymentInfo = data;
    console.log(UsersService.paymentInfo);
  });
}

/** Post a new payment info*/
httpPostPayment(content) {
  this.http.post(this.requestUrl+"/paymentinfo/Create", content, this.httpOptions)
  .subscribe(
    val => {
      console.log('post successfully', val);
    },
    error => {
      console.log('fail to post', error);
    }
  );
}

/** Delete all shopping cart item*/
httpDeleteAllItem(content) {
  this.http.post(this.requestUrl+"/ShoppingCartItem/Delete?username="+content, content, this.httpOptions)
  .subscribe(
    val => {
      console.log('post successfully', val);
      this.router.navigate(['/shop'])
    },
    error => {
      console.log('fail to post', error);
      this.router.navigate(['/shop'])
    }
  );
}

}