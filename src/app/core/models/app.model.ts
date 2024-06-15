import {FormControl, FormGroup} from "@angular/forms";

interface Runtime {
  category: 'runtime'
  type: 'forward' | 'rewind' | 'timeshift'
}

interface Money {
  category: 'money'
  type: 'credit' | 'debit'
}

type RuntimeMoney = Runtime | Money;

export type Category = RuntimeMoney['category'];
export type Type = RuntimeMoney['type'];

export type ActionFormControls = {
  category: FormControl<Category>;
  type: FormControl<Type>;
  value: FormControl<number>;
}

export type Action = ReturnType<FormGroup<ActionFormControls>['getRawValue']>;
