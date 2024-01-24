import { Routes } from '@angular/router';
import { PaymentViewComponent } from './Payment/view/payment-view/payment-view.component';

export const routes: Routes = [
  { path: '', component: PaymentViewComponent },
  { path: 'balance', loadComponent: () => import('./Balance/views/balance-view/balance-view.component').then(component => component.BalanceViewComponent) }

];
