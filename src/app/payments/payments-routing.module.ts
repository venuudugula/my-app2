import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpipaymentComponent } from './upipayment/upipayment.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';

const routes: Routes = [
  {path:'',component:UpipaymentComponent},
  {path:'upipayment',component:UpipaymentComponent},
  {path:'card-payment',component:CardPaymentComponent},
  {path:'netbanking',component:CardPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
