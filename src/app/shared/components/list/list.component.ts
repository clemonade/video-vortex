import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {
  IonCard,
  IonCardContent,
  IonChip, IonIcon,
  IonItem, IonItemOption, IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonText
} from "@ionic/angular/standalone";
import {
  CATEGORY_TYPE_COLOR_MAP,
  CATEGORY_TYPE_SHORT_TEXT_MAP,
  CATEGORY_TYPE_TEXT_MAP
} from "../../../core/constants/app.constant";
import {Action} from "../../../core/models/app.model";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    JsonPipe,
    IonList,
    IonItem,
    IonLabel,
    IonChip,
    IonText,
    IonCard,
    IonCardContent,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  actions = input<Action[]>([]);
  removeAction = output<number>();

  protected readonly CATEGORY_TYPE_COLOR_MAP = CATEGORY_TYPE_COLOR_MAP;
  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;
  protected readonly CATEGORY_TYPE_SHORT_TEXT_MAP = CATEGORY_TYPE_SHORT_TEXT_MAP;
}
