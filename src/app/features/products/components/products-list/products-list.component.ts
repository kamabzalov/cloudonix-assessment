import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'cloudonix-products-list',
    standalone: true,
    imports: [],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
    constructor(private productsService: ProductsService) {}

    public ngOnInit(): void {
        this.productsService
            .getProducts()
            .subscribe(products => console.log(products));
    }
}
