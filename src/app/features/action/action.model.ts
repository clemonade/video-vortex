import {FormControl} from "@angular/forms";
import {Category, Type} from "../../core/models/app.model";

export type ActionFormControls = {
  category: FormControl<Category>;
  type: FormControl<Type>;
  value: FormControl<number>;
}
