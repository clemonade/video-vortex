import {FormControl, FormGroup} from "@angular/forms";

export type Category = 'runtime' | 'money';
export type Type = 'forward' | 'rewind' | 'timeshift' | 'credit' | 'debit';

export type ActionFormControls = {
  category: FormControl<Category>;
  type: FormControl<Type>;
  value: FormControl<number>;
}

export type Action = ReturnType<FormGroup<ActionFormControls>['getRawValue']>;
