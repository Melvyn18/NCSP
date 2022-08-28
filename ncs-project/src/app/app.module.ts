import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ThanksComponent } from './thanks/thanks.component';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';
import { BagComponent } from './bag/bag.component';
import { BottleComponent } from './bottle/bottle.component';
import { MugComponent } from './mug/mug.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'thanks', component: ThanksComponent},
  {path: 'upi', component: UpiComponent},
  {path: 'card', component: CardComponent},
  {path: 'bag', component: BagComponent},
  {path: 'bottle', component: BottleComponent},
  {path: 'mug', component: MugComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    ProductsComponent,
    OrderComponent,
    PaymentComponent,
    ThanksComponent,
    UpiComponent,
    CardComponent,
    BagComponent,
    BottleComponent,
    MugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
