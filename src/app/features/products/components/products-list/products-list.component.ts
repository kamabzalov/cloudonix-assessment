import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
    OnInit,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { finalize, Observable, of, switchMap } from 'rxjs';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'cloudonix-products-list',
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    protected products$: Observable<Product[]> = of([]);
    protected activeProduct: Product | null = null;
    private destroyRef = inject(DestroyRef);

    constructor(
        private productsService: ProductsService,
        protected router: Router,
        private cdr: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.products$ = this.getProducts();
    }

    protected openProductDetails(product: Product) {
        this.activeProduct = product;
        this.cdr.markForCheck();
    }

    protected deleteProduct($event: number) {
        this.products$ = this.productsService.deleteProduct($event).pipe(
            takeUntilDestroyed(this.destroyRef),
            finalize(() => {
                this.activeProduct = null;
                this.cdr.markForCheck();
            }),
            switchMap(() => this.getProducts())
        );
    }

    protected saveProduct($event: Partial<Product>) {
        if (this.activeProduct?.id) {
            const updatedProduct: Partial<Product> = {
                name: $event.name,
                description: $event.description,
                cost: $event.cost,
                profile: $event.profile,
            };
            this.products$ = this.productsService
                .updateProduct(this.activeProduct.id, updatedProduct)
                .pipe(
                    takeUntilDestroyed(this.destroyRef),
                    finalize(() => {
                        this.activeProduct = null;
                        this.cdr.markForCheck();
                    }),
                    switchMap(() => this.getProducts())
                );
        } else {
            this.products$ = this.productsService.createProduct($event).pipe(
                takeUntilDestroyed(this.destroyRef),
                finalize(() => {
                    this.activeProduct = null;
                    this.cdr.markForCheck();
                }),
                switchMap(() => this.getProducts())
            );
        }
    }

    private getProducts() {
        return this.productsService.getProducts();
    }
}
