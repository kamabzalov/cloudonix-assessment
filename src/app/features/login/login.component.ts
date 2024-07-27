import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { notEmptyValidator } from '../../shared/validators/not-empty-validator';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';

interface LoginForm {
    token: FormControl<string>;
}

@Component({
    selector: 'cloudonix-login',
    standalone: true,
    imports: [ReactiveFormsModule, JsonPipe],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    protected form!: FormGroup<LoginForm>;

    public constructor(
        private fb: NonNullableFormBuilder,
        private router: Router,
        private storageService: StorageService
    ) {}

    public ngOnInit(): void {
        this.form = this.fb.group<LoginForm>({
            token: new FormControl<string>('', {
                nonNullable: true,
                validators: [Validators.required, notEmptyValidator()],
            }),
        });
    }

    protected login() {
        if (this.form.valid) {
            this.storageService.setKey(
                'cloudonix-token',
                this.form.value.token
            );
            this.router.navigate(['/products']);
        }
    }
}
