import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption
} from "@ionic/angular/standalone";
import {FillPipe} from "../../shared/pipes/fill.pipe";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActionFormControls} from "./action.model";
import {PickerColumnComponent} from "../../shared/components/picker-column/picker-column.component";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {tap} from "rxjs";
import {MAX_FILL_VALUE} from "../../core/constants/app.constant";

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
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionComponent {
  form = new FormGroup<ActionFormControls>({
    category: new FormControl('runtime', {nonNullable: true}),
    type: new FormControl('forward', {nonNullable: true}),
    value: new FormControl(1, {nonNullable: true}),
  })

  MAX_FILL_VALUE = MAX_FILL_VALUE;

  categoryChange$ = this.form.controls.category.valueChanges.pipe(
    tap((category) => {
      switch (category) {
        case "runtime": {
          setTimeout(() => this.form.controls.type.setValue('forward'))
          break;
        }
        case "money": {
          setTimeout(() => this.form.controls.type.setValue('plus'))
        }
      }
    })
  )
}
