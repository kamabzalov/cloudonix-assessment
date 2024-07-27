import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
    selector: 'cloudonix-products-list',
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    protected products$: Observable<Product[]> = of([]);
    protected activeProduct: Product | null = null;

    constructor(
        private productsService: ProductsService,
        protected router: Router,
        private cdr: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.products$ = this.productsService.getProducts();
    }

    protected openProductDetails(product: Product) {
        this.activeProduct = product;
        this.cdr.markForCheck();
    }
}
