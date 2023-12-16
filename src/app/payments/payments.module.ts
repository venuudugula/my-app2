import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpipaymentComponent } from './upipayment/upipayment.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { NetbankingComponent } from './netbanking/netbanking.component';


@NgModule({
  declarations: [
    UpipaymentComponent,
    CardPaymentComponent,
    NetbankingComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
