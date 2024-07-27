import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { Product } from '../../models/product';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { notEmptyValidator } from '../../../../shared/validators/not-empty-validator';

interface ProductForm {
    name: FormControl<string>;
    description: FormControl<string>;
    cost: FormControl<number>;
}

@Component({
    selector: 'cloudonix-product-card',
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit, OnChanges {
    @Input() product: Product | null = null;

    protected form!: FormGroup<ProductForm>;

    constructor(private fb: NonNullableFormBuilder) {}

    public ngOnInit(): void {
        this.form = this.fb.group<ProductForm>({
            name: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, notEmptyValidator()],
            }),
            description: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, notEmptyValidator()],
            }),
            cost: new FormControl<number>(0, {
                nonNullable: true,
                validators: [Validators.min(1)],
            }),
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.product) {
            this.form.patchValue({
                name: this.product.name,
                description: this.product.description,
                cost: this.product.cost,
            });
        }
    }
}
