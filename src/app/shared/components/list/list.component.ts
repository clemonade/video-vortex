import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  viewChild,
} from "@angular/core";
import { JsonPipe, UpperCasePipe } from "@angular/common";
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
  standalone: true,
  imports: [
    JsonPipe,
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

  protected readonly CATEGORY_TYPE_COLOR_MAP = CATEGORY_TYPE_COLOR_MAP;
  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;

  onRemoveAction(index: number) {
    this.itemSliding()?.closeOpened();
    this.removeAction.emit(index);
  }

  onEditAction(index: number) {
    this.itemSliding()?.closeOpened();
    this.editAction.emit(index);
  }

  onItemReorder(event: CustomEvent<ItemReorderEventDetail>) {
    this.reorderActions.emit(event.detail.complete(this.actions()));
  }
}
