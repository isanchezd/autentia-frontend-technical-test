import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalVisibilityHandlerService } from '../../services/modal-visibility-handler.service';
import { Subject, takeUntil } from 'rxjs';
import { ModalConfig } from '../../services/ModalConfig';
import { AddFriendContainerComponent } from '../../Friend/components/add-friend-container/add-friend-container.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [AddFriendContainerComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  private _config!: ModalConfig
  private _destroyed$: Subject<void> = new Subject<void>();

  constructor(private _modalVisibilityHandler: ModalVisibilityHandlerService, private injector: Injector) {}

  public get show(): boolean {
    return this._config.status
  }

  public loadComponent(component: any) {
    if (this.container && component) {
      this.container.clear();
      this.container.createComponent(component, {
        injector: this.injector
      });
    }
  }

  public ngOnInit(): void {
    this._modalVisibilityHandler.subject
      .pipe(takeUntil(this._destroyed$))
      .subscribe(config => {
        this._config = config
        this.loadComponent(this._config.component)
      })
  }


}
