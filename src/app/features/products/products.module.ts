import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CostFormatDirective } from '../../shared/directives/cost-format.directive';
import { CommonProductPropsComponent } from './components/common-product-props/common-product-props.component';
import { CustomProductPropsComponent } from './components/custom-product-props/custom-product-props.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductsListComponent,
        ProductCardComponent,
        CostFormatDirective,
        CommonProductPropsComponent,
        CustomProductPropsComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule,
    ],
})
export class ProductsModule {}
