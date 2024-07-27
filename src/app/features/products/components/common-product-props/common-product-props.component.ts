import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ProductPropertiesGroup } from '../product-card/product-card.component';
import { ProductProperties } from '../../models/product';

@Component({
    selector: 'cloudonix-common-product-props',
    templateUrl: './common-product-props.component.html',
    styleUrl: './common-product-props.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonProductPropsComponent implements OnInit, OnChanges {
    @Input() public properties: ProductProperties | undefined = undefined;

    protected form!: FormGroup<ProductPropertiesGroup>;

    protected readonly productTypeOptions: string[] = [
        'furniture',
        'equipment',
        'stationary',
        'part',
    ];

    constructor(private formGroupDirective: FormGroupDirective) {}

    public ngOnInit(): void {
        this.form = this.formGroupDirective.form.get(
            'profile'
        ) as FormGroup<ProductPropertiesGroup>;
    }

    public ngOnChanges(): void {
        if (this.properties) {
            this.form?.setValue({
                type: this.properties.type,
                backlog: this.properties.backlog ?? 0,
                available: this.properties.available ?? false,
            });
        }
    }
}
