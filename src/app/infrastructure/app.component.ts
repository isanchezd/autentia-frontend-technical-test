import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaymentViewComponent } from './Payment/views/payment-view/payment-view.component';
import { ModalComponent } from './components/modal/modal.component';
import { AppStore } from './store/app.store';
import { getFriends } from '../application/getFriends';
import { FriendSessionRepositoryService } from './Friend/services/friend-session-repository.service';
import { getPayments } from '../application/getPayments';
import { PaymentSessionRepositoryService } from './Payment/services/payment-session-repository.service';
import { BalanceViewComponent } from './Balance/views/balance-view/balance-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent, PaymentViewComponent, BalanceViewComponent, ModalComponent],
  providers: [AppStore],
  styleUrl: './app.component.css',
  template: `
    <section class="app-layout">
        <app-header class="header bg-primary" />
        <main class="main">
            <app-menu class="container" />
            <section class="container">
                <router-outlet />
            </section>
        </main>
        <app-footer class="footer bg-primary" />
    </section>
    <app-modal />
  `
})
export class AppComponent implements OnInit {

  constructor(private _store: AppStore) {}

  public ngOnInit(): void {
    this._store.state = {
      friends: getFriends(new FriendSessionRepositoryService()),
      payments: getPayments(new PaymentSessionRepositoryService())
    }
  }
}
