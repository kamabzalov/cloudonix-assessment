import { Component } from '@angular/core';
import { StorageService } from '../../shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'cloudonix-products',
    templateUrl: './products.component.html',
})
export class ProductsComponent {
    public constructor(
        private storage: StorageService,
        private router: Router
    ) {}

    protected logout() {
        this.storage.removeKey('cloudonix-token');
        this.router.navigate(['/']);
    }
}
