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
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogConfig, MatDialogModule, MatCheckboxModule, MatFormFieldModule,MatButtonModule, MatInputModule, MatRippleModule, MatCommonModule } from '@angular/material';
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
    PaymentComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatCommonModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GameComponent]
})
export class AppModule { }
