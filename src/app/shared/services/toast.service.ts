import { Injectable } from '@angular/core';

export interface ToastInfo {
    header: string;
    body: string;
    delay?: number;
}

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    private _toasts: ToastInfo[] = [];

    get toasts() {
        return this._toasts;
    }

    public show(header: string, body: string) {
        this._toasts.push({ header, body });
    }

    public remove(toast: ToastInfo) {
        this._toasts = this._toasts.filter(t => t != toast);
    }
}
