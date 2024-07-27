import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[cloudonixCostFormat]',
})
export class CostFormatDirective {
    constructor(private el: ElementRef<HTMLInputElement>) {}

    @HostListener('change', ['$event'])
    public formatValue() {
        const formattedValue = (+this.el.nativeElement.value).toFixed(2);
        this.el.nativeElement.value = formattedValue;
    }
}
