import {ChangeDetectionStrategy, Component, effect, output} from '@angular/core';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption
} from "@ionic/angular/standalone";
import {FillPipe} from "../../pipes/fill.pipe";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {PickerColumnComponent} from "../picker-column/picker-column.component";
import {Action, ActionFormControls} from "../../../core/models/app.model";
import {MAX_FILL_LENGTH} from '../../../core/constants/app.constant';
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [
    IonModal,
    IonFab,
    IonFabButton,
    IonIcon,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    FillPipe,
    ReactiveFormsModule,
    PickerColumnComponent,
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionComponent {
  actionChange = output<Action>()

  form = new FormGroup<ActionFormControls>({
    category: new FormControl('runtime', {nonNullable: true}),
    type: new FormControl('forward', {nonNullable: true}),
    value: new FormControl(1, {nonNullable: true}),
  })

  protected readonly MAX_FILL_LENGTH = MAX_FILL_LENGTH;

  categoryChange$ = toSignal(this.form.controls.category.valueChanges)

  constructor() {
    effect(() => {
      switch (this.categoryChange$()) {
        case "runtime": {
          setTimeout(() => this.form.controls.type.setValue('forward'))
          break;
        }
        case "money": {
          setTimeout(() => this.form.controls.type.setValue('credit'))
        }
      }
    })
  }
}
