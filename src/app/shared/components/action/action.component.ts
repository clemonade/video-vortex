import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from "@angular/core";
import {
  IonBadge,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonPicker,
  IonPickerColumnOption,
  IonSegment,
  IonSegmentButton,
} from "@ionic/angular/standalone";
import { FillPipe } from "../../pipes/fill.pipe";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { PickerColumnComponent } from "../picker-column/picker-column.component";
import {
  Action,
  Category,
  Money,
  Runtime,
} from "../../../core/models/app.model";
import {
  CATEGORY_TYPE_TEXT_MAP,
  DEFAULT_MONEY,
  DEFAULT_RUNTIME,
  MAX_FILL_LENGTH,
} from "../../../core/constants/app.constant";
import { ChipComponent } from "../chip/chip.component";
import { NgTemplateOutlet, UpperCasePipe } from "@angular/common";

@Component({
  selector: "app-action",
  imports: [
    IonFabButton,
    IonIcon,
    IonPicker,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionComponent {
  private readonly formBuilder = inject(FormBuilder).nonNullable;

  actionToEdit = input<Action>();
  addAction = output<Action>();
  updateAction = output<Action>();

  categoryForm = computed(() => {
    const control = this.formBuilder.control<Category>("runtime");
    const action = this.actionToEdit();
    if (action) {
      control.setValue(action.category);
      control.disable();
    }
    return control;
  });

  runtimeForm = computed(() => {
    const form = this.formBuilder.group<Runtime>(DEFAULT_RUNTIME);
    const action = this.actionToEdit();
    if (action?.category === "runtime") {
      form.patchValue(action);
    }
    return form;
  });

  moneyForm = computed(() => {
    const form = this.formBuilder.group<Money>(DEFAULT_MONEY);
    const action = this.actionToEdit();
    if (action?.category === "money") {
      form.patchValue(action);
    }
    return form;
  });

  readonly CATEGORIES = ["runtime", "money"] as const;
  readonly RUNTIME_TYPES = ["rewind", "forward", "timeshift"] as const;
  readonly MONEY_TYPES = ["credit", "debit"] as const;

  readonly CATEGORY_FORM_MAP = computed(() => ({
    runtime: this.runtimeForm(),
    money: this.moneyForm(),
  }));

  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;
  protected readonly MAX_FILL_LENGTH = MAX_FILL_LENGTH;
}
