import {FormControl} from "@angular/forms";

interface Runtime {
  category: 'runtime'
  type: 'forward' | 'rewind' | 'timeshift'
}

interface Money {
  category: 'money'
  type: 'credit' | 'debit'
}

export type Action = (Runtime | Money) & {
  value: number;
};

export type Category = Action['category'];
export type Type = Action['type'];

export type ActionFormControls = {
  category: FormControl<Category>;
  type: FormControl<Type>;
  value: FormControl<Action['value']>;
}
