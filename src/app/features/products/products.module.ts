import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

@NgModule({
    declarations: [ProductsComponent],
    imports: [RouterModule, CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
