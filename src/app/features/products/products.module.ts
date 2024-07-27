import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductsListComponent,
        ProductCardComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
    ],
})
export class ProductsModule {}
