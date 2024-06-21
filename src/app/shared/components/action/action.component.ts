import {ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, input, output} from "@angular/core";
import {
  IonBadge,
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
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {PickerColumnComponent} from "../picker-column/picker-column.component";
import {Action, Category, Money, Runtime} from "../../../core/models/app.model";
import {
  CATEGORY_TYPE_TEXT_MAP,
  DEFAULT_MONEY,
  DEFAULT_RUNTIME,
  MAX_FILL_LENGTH
} from "../../../core/constants/app.constant";
import {ChipComponent} from "../chip/chip.component";
import {NgTemplateOutlet, UpperCasePipe} from "@angular/common";

@Component({
  selector: "app-action",
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
    IonBadge,
    UpperCasePipe,
    NgTemplateOutlet,
  ],
  templateUrl: "./action.component.html",
  styleUrl: "./action.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionComponent {
  formBuilder = inject(FormBuilder).nonNullable;
  changeDetectorRef = inject(ChangeDetectorRef);

  actionToEdit = input<Action>();
  addAction = output<Action>();
  updateAction = output<Action>();

  categoryForm = this.formBuilder.control<Category>("runtime");
  runtimeForm = this.formBuilder.group<Runtime>(DEFAULT_RUNTIME);
  moneyForm = this.formBuilder.group<Money>(DEFAULT_MONEY);

  CATEGORIES = ["runtime", "money"] as const;
  RUNTIME_TYPES = ["rewind", "forward", "timeshift"] as const;
  MONEY_TYPES = ["credit", "debit"] as const;

  CATEGORY_FORM_MAP = {
    runtime: this.runtimeForm,
    money: this.moneyForm
  };

  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;
  protected readonly MAX_FILL_LENGTH = MAX_FILL_LENGTH;

  constructor() {
    effect(() => {
      const action = this.actionToEdit();
      if (action) {
        this.categoryForm.setValue(action.category);
        this.categoryForm.disable();
        switch (action.category) {
          case "runtime":
            this.runtimeForm.patchValue(action);
            break;
          case "money":
            this.moneyForm.patchValue(action);
        }
        this.changeDetectorRef.markForCheck();
      } else {
        this.categoryForm.enable();
      }
    });
  }
}
