import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

export const hasTokenGuard: CanActivateFn = () => {
    const storage = inject(StorageService);
    const router = inject(Router);
    const token = storage.getKey('cloudonix-token');
    if (!token) {
        router.navigate(['/']);
        return false;
    }
    return true;
};
