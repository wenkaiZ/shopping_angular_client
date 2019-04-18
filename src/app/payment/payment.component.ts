import { Payment } from './../payments';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { ShareInfoService } from '../share-info.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  allPaymentInfo: Payment[];
  user: string;
  paymentInfo: Payment[] = new Array();
  newPayment: Payment = new Payment();

  constructor(private router:Router, private userService:UsersService) { 
    this.allPaymentInfo = UsersService.paymentInfo;
    this.user = ShareInfoService.userName;
    this.userService.httpGetPaymentInfo();
    this.userService.httpGetShoppingCartItems();
    this.CheckPayment();
  }

  ngOnInit() {
  }

  public CheckPayment(){
    this.allPaymentInfo.forEach(element => {
      if(element.userName==this.user){
        this.paymentInfo.push(element);
      }
    });
  }

  public CheckOut(){
    this.userService.httpDeleteAllItem(this.user);
  }

  public AddCard(){
    this.newPayment.userName = this.user;
    this.userService.httpPostPayment(this.newPayment);
    this.CheckOut();
  }
}
