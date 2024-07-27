import {
    HttpErrorResponse,
    HttpInterceptorFn,
    HttpStatusCode,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    const tokenService = inject(StorageService);
    const token = tokenService.getKey('cloudonix-token');
    const bearerReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(bearerReq).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === HttpStatusCode.Unauthorized) {
                router.navigate(['/']);
            }
            return throwError(error);
        })
    );
};
