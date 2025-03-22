import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
  viewChild,
} from "@angular/core";
import { UpperCasePipe } from "@angular/common";
import {
  IonBadge,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/angular/standalone";
import {
  CATEGORY_TYPE_COLOR_MAP,
  CATEGORY_TYPE_TEXT_MAP,
} from "../../../core/constants/app.constant";
import { Action } from "../../../core/models/app.model";
import { ChipComponent } from "../chip/chip.component";
import { ItemReorderEventDetail } from "@ionic/angular";

@Component({
  selector: "app-list",
  imports: [
    IonList,
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonText,
    ChipComponent,
    IonBadge,
    UpperCasePipe,
    IonReorderGroup,
    IonReorder,
    IonSelect,
    IonSelectOption,
  ],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  itemSliding = viewChild(IonItemSliding);

  actions = input<Action[]>([]);
  removeAction = output<number>();
  editAction = output<number>();
  reorderActions = output<Action[]>();

  sortAsc = signal(false);
  sortedActions = computed(() =>
    this.sortAsc() ? this.actions() : this.actions().toReversed(),
  );

  protected readonly CATEGORY_TYPE_COLOR_MAP = CATEGORY_TYPE_COLOR_MAP;
  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;

  onSortChange(value: boolean) {
    this.itemSliding()?.closeOpened();
    this.sortAsc.set(value);
  }

  onEditAction(index: number) {
    this.itemSliding()?.closeOpened();
    this.editAction.emit(index);
  }

  onRemoveAction(index: number) {
    this.itemSliding()?.closeOpened();
    this.removeAction.emit(index);
  }

  onItemReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const newSortedActions: Action[] = event.detail.complete(
      this.sortedActions(),
    );
    this.reorderActions.emit(
      this.sortAsc() ? newSortedActions : newSortedActions.toReversed(),
    );
  }

  getActionsIndex(index: number) {
    return this.sortAsc() ? index : this.actions().length - index - 1;
  }
}
