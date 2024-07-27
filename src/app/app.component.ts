import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cloudonix-root',
    standalone: true,
    imports: [RouterOutlet, NgbToast],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
