import { AbstractControl, ValidatorFn } from '@angular/forms';

export function notEmptyValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        return control.value.trim() ? null : { emptyValue: true };
    };
}
