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
    this.setPaymentProd();
  }

  private setPaymentProd() {
    return of('SettingPaymentOnProd').pipe(
      switchMap((data) =>
        of('Modified SettingPaymentOnProd').pipe(
          map((data) => `Modified ${data} for payment on prod`),
          switchMap((data) => of('OTP Process')),
          switchMap((data) => of('EMV Process')),
          catchError((err) => `Error`)
        )
      ),
      map((data) => 'Finialized response...')
    );
  }
}
