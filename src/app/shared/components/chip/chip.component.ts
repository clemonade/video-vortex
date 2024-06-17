import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {
  CATEGORY_TYPE_COLOR_MAP,
  CATEGORY_TYPE_SHORT_TEXT_MAP,
  CATEGORY_TYPE_TEXT_MAP
} from "../../../core/constants/app.constant";
import {IonChip} from "@ionic/angular/standalone";
import {Category, Type} from "../../../core/models/app.model";

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [
    IonChip
  ],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {
  category = input<Category>('runtime');
  type = input<Type>();
  value = input<number>();

  protected readonly CATEGORY_TYPE_COLOR_MAP = CATEGORY_TYPE_COLOR_MAP;
  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;
  protected readonly CATEGORY_TYPE_SHORT_TEXT_MAP = CATEGORY_TYPE_SHORT_TEXT_MAP;
}
