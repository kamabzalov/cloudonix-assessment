import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { Product, ProductProperties } from '../../models/product';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { notEmptyValidator } from '../../../../shared/validators/not-empty-validator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../../../../shared/components/modal-confirm/modal-confirm.component';

interface ProductForm {
    name: FormControl<string>;
    description: FormControl<string>;
    cost: FormControl<number>;
    sku: FormControl<string>;
    profile: FormGroup<ProductPropertiesGroup>;
}

export interface ProductPropertiesGroup {
    type: FormControl<string>;
    available: FormControl<boolean>;
    backlog: FormControl<number>;
}

@Component({
    selector: 'cloudonix-product-card',
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit, OnChanges {
    @Input() product: Product | null = null;
    @Output() productDeleted = new EventEmitter<number>();
    @Output() productSaved = new EventEmitter<Partial<Product>>();

    protected form!: FormGroup<ProductForm>;

    constructor(
        private fb: NonNullableFormBuilder,
        private modalService: NgbModal
    ) {}

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
                validators: [Validators.required, Validators.min(1)],
            }),
            sku: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, notEmptyValidator()],
            }),
            profile: new FormGroup({
                type: new FormControl<string>('', {
                    nonNullable: true,
                }),
                available: new FormControl<boolean>(false, {
                    nonNullable: true,
                }),
                backlog: new FormControl<number>(0, {
                    nonNullable: true,
                }),
            }),
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.product) {
            this.form.patchValue({
                name: this.product.name,
                description: this.product.description,
                cost: this.product.cost,
                sku: this.product.sku,
            });
            this.form.controls.sku.disable();
        } else if (!changes['product'].firstChange) {
            this.form.reset();
        }
    }

    protected deleteProduct() {
        const modal = this.modalService.open(ModalConfirmComponent);
        modal.closed.subscribe(reason => {
            if (reason) {
                this.productDeleted.emit(this.product?.id);
                this.form.controls.sku.enable();
            }
        });
    }

    protected saveProduct() {
        if (this.form.valid) {
            let product: Partial<Product> = {
                name: this.form.controls.name.value,
                description: this.form.controls.description.value,
                cost: this.form.controls.cost.value,
                profile: this.form.value.profile as ProductProperties,
            };

            if (!this.product) {
                product = { ...product, sku: this.form.value.sku };
            }
            this.productSaved.emit(product);
        }
        this.form.reset();
    }
}
