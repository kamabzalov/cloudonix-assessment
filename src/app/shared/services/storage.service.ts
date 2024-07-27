import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    public setKey(key: string, value: unknown) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public getKey(key: string): unknown {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        return null;
    }

    public removeKey(key: string): void {
        localStorage.removeItem(key);
    }
}
