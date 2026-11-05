import { inject, Injectable, signal } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

type SIGNUP_FIELD_STATUS =
  | 'PENDING'
  | 'OK'
  | 'TOO SHORT'
  | 'TOO LONG'
  | 'BAD CHARACTER'
  | 'MALFORMED'
  | 'MISMATCH'
  | 'REQUIRED';

interface SignupFields {
  callsign?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  termsAndConditions: boolean;
  status: Array<SIGNUP_FIELD_STATUS>;
}

const SIGNUP_FIELD_NAMES = [
  'callSign',
  'email',
  'password',
  'confirmPassword',
  'termsAndConditions',
] as const;

type SignupFieldName = (typeof SIGNUP_FIELD_NAMES)[number];

@Injectable({
  providedIn: 'root',
})
export class GamerSignupService {
  formBuilder = inject(FormBuilder);
  fieldsValidated = signal<number>(0);
  fieldValidationStatus = signal<Partial<Record<SignupFieldName, boolean>>>({});

  operatorForm = this.formBuilder.group({
    callSign: [
      '',
      [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ],
    ],
    email: ['', Validators.email],
    password: ['', Validators.minLength(8)],
    confirmPassword: ['', Validators.minLength(8)],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  constructor() {
    for (const fieldName of SIGNUP_FIELD_NAMES) {
      const control: AbstractControl = this.operatorForm.controls[fieldName];
      control.valueChanges.subscribe(() => this.updateFieldValidationStatus());
      control.statusChanges.subscribe(() => this.updateFieldValidationStatus());
    }

    this.updateFieldValidationStatus();
  }

  private updateFieldValidationStatus(): void {
    const fieldValidationStatus: Partial<Record<SignupFieldName, boolean>> = {};

    for (const fieldName of SIGNUP_FIELD_NAMES) {
      const control = this.operatorForm.controls[fieldName];
      const value = control.value;
      const isEmpty =
        value === null ||
        value === undefined ||
        value === false ||
        (typeof value === 'string' && value.trim() === '');

      if (!isEmpty) {
        fieldValidationStatus[fieldName] = control.valid;
      }
    }

    this.fieldValidationStatus.set(fieldValidationStatus);
    this.fieldsValidated.set(
      Object.values(fieldValidationStatus).filter((isValid) => isValid).length,
    );
  }

  get totalFieldsCount(): number {
    return SIGNUP_FIELD_NAMES.length;
  }

  get fieldsValidatedCount(): number {
    return this.fieldsValidated();
  }

  get callSignControl(): AbstractControl {
    return this.operatorForm.controls.callSign;
  }

  get emailControl(): AbstractControl {
    return this.operatorForm.controls.email;
  }

  get passwordControl(): AbstractControl {
    return this.operatorForm.controls.password;
  }

  get confirmPasswordControl(): AbstractControl {
    return this.operatorForm.controls.confirmPassword;
  }

  get termsAndConditionsControl(): AbstractControl {
    return this.operatorForm.controls.termsAndConditions;
  }
}
