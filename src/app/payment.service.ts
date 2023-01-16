import { Injectable } from '@angular/core';
import {
  catchError,
  map,
  of,
  startWith,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor() {}

  public setPayment() {
    this.setPaymentDev();
  }

  private setPaymentDev() {
    return of('SettingPaymentOnDev').pipe(
      startWith('Dev payment inital data'),
      map((data) => `modified ${data} for payment on dev`),
      switchMap((data) => of('Modified SeetingPaymentOnDev'))
    );
  }
}
