import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { ProductProperties } from '../../models/product';
import {
    FormArray,
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { notEmptyValidator } from '../../../../shared/validators/not-empty-validator';

interface CustomPropertyFormGroup {
    properties: FormArray;
}

@Component({
    selector: 'cloudonix-custom-product-props',
    templateUrl: './custom-product-props.component.html',
    styleUrl: './custom-product-props.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProductPropsComponent implements OnInit {
    @Input() public customProperties:
        | Omit<ProductProperties, 'type' | 'available' | 'backlog'>
        | undefined = undefined;

    protected form!: FormGroup<CustomPropertyFormGroup>;

    constructor(private formBuilder: NonNullableFormBuilder) {}

    public ngOnInit(): void {
        this.form = this.formBuilder.group<CustomPropertyFormGroup>({
            properties: this.formBuilder.array([]),
        });
    }

    protected get properties(): FormArray<FormGroup> {
        return this.form.controls.properties;
    }

    protected addNew() {
        const newCustomProperty: FormGroup = this.formBuilder.group({
            value: new FormControl('', {
                validators: [Validators.required, notEmptyValidator()],
            }),
            key: new FormControl('', {
                validators: [Validators.required, notEmptyValidator()],
            }),
        });
        this.form.controls.properties.push(newCustomProperty);
    }

    protected removeAttribute(i: number) {
        this.form.controls.properties.removeAt(i);
    }
}
