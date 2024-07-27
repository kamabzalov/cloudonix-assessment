import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cloudonix-modal-confirm',
    standalone: true,
    imports: [],
    templateUrl: './modal-confirm.component.html',
    styleUrl: './modal-confirm.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalConfirmComponent {
    protected modal = inject(NgbActiveModal);
}
