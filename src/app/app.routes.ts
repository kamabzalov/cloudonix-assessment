import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { hasTokenGuard } from './shared/guards/has-token.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'products',
        canActivate: [hasTokenGuard],
        loadChildren: () =>
            import('./features/products/products.module').then(
                m => m.ProductsModule
            ),
    },
];
