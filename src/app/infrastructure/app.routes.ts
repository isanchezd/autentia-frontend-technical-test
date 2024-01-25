import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./Payment/view/payment-view/payment-view.component').then(component => component.PaymentViewComponent) },
  { path: 'balance', loadComponent: () => import('./Balance/views/balance-view/balance-view.component').then(component => component.BalanceViewComponent) }

];
