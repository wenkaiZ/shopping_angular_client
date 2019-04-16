import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from "@angular/router"
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'cart', component: CartComponent },
  { path: 'checkout' , component:CheckoutComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'payment', component:PaymentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    RegisterComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
