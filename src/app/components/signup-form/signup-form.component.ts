import { Component } from '@angular/core';
import { CommonInputFieldComponent } from '../../shared/components/common-input-field/common-input-field.component';

@Component({
  selector: 'app-signup-form',
  imports: [CommonInputFieldComponent],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {}
