import {ChangeDetectionStrategy, Component, input, output, viewChild} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonText
} from "@ionic/angular/standalone";
import {CATEGORY_TYPE_TEXT_MAP} from "../../../core/constants/app.constant";
import {Action} from "../../../core/models/app.model";
import {ChipComponent} from "../chip/chip.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    JsonPipe,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonText,
    ChipComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  itemSliding = viewChild(IonItemSliding);

  actions = input<Action[]>([]);
  removeAction = output<number>();

  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;

  onRemoveAction(index: number) {
    this.itemSliding()?.closeOpened();
    this.removeAction.emit(index);
  }
}
