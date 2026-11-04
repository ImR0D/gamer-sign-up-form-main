import { Component, input } from '@angular/core';

export type CommonInputTypes = 'text' | 'email' | 'password';

@Component({
  selector: 'app-common-input-field',
  imports: [],
  templateUrl: './common-input-field.component.html',
  styleUrl: './common-input-field.component.scss',
})
export class CommonInputFieldComponent {
  fieldName = input.required<string>();
  fieldType = input.required<CommonInputTypes>();
  placeholder = input.required<string>();
  isRequired = input<boolean>(false);
  autoComplete = input<AutoFill>('off');
  hint = input<string>('');
  error = input<string>('');
}
