import {ChangeDetectionStrategy, Component, effect, output} from '@angular/core';
import {
  IonChip,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonSegment,
  IonSegmentButton
} from "@ionic/angular/standalone";
import {FillPipe} from "../../pipes/fill.pipe";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {PickerColumnComponent} from "../picker-column/picker-column.component";
import {Action, ActionFormControls} from "../../../core/models/app.model";
import {
  CATEGORY_TYPE_COLOR_MAP,
  CATEGORY_TYPE_SHORT_TEXT_MAP,
  CATEGORY_TYPE_TEXT_MAP,
  MAX_FILL_LENGTH
} from '../../../core/constants/app.constant';
import {toSignal} from "@angular/core/rxjs-interop";
import {ChipComponent} from "../chip/chip.component";

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [
    IonFab,
    IonFabButton,
    IonIcon,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    FillPipe,
    ReactiveFormsModule,
    PickerColumnComponent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    ChipComponent,
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionComponent {
  addAction = output<Action>()

  form = new FormGroup<ActionFormControls>({
    category: new FormControl('runtime', {nonNullable: true}),
    type: new FormControl('forward', {nonNullable: true}),
    value: new FormControl(1, {nonNullable: true}),
  })

  CATEGORIES = ['runtime', 'money'] as const;
  RUNTIME_TYPES = ['rewind', 'forward', 'timeshift'] as const;
  MONEY_TYPES = ['credit', 'debit'] as const;

  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;
  protected readonly MAX_FILL_LENGTH = MAX_FILL_LENGTH;

  categoryChange$ = toSignal(this.form.controls.category.valueChanges)

  constructor() {
    effect(() => {
      switch (this.categoryChange$()) {
        case "runtime": {
          this.form.controls.type.setValue('forward')
          break;
        }
        case "money": {
          this.form.controls.type.setValue('credit')
        }
      }
    })
  }
}
