import { Component } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _paymentService: PaymentService) {}

  setPayment() {
    this._paymentService.setPayment();
  }
}
