import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalConfig } from './ModalConfig';


@Injectable({
    providedIn: 'root'
})
export class ModalVisibilityHandlerService {
    private _subject: BehaviorSubject<ModalConfig>

    constructor() {
        this._subject = new BehaviorSubject<ModalConfig>({ component: '', status: false });
    }

    get subject(): BehaviorSubject<ModalConfig> {
        return this._subject
    }

    public show(component: any) {
        this._subject.next({ component, status: true });
    }

    public hide() {
        this._subject.next({ component: null, status: false });
    }
}
