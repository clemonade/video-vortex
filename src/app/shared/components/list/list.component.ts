import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {StateService} from "../../../core/services/state.service";
import {DecimalPipe, JsonPipe} from "@angular/common";
import {IonChip, IonItem, IonLabel, IonList, IonText} from "@ionic/angular/standalone";
import {CATEGORY_COLOR_MAP, CATEGORY_TYPE_TEXT_MAP} from "../../../core/constants/app.constant";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    JsonPipe,
    IonList,
    IonItem,
    IonLabel,
    DecimalPipe,
    IonChip,
    IonText
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  stateService = inject(StateService)

  protected readonly CATEGORY_TYPE_TEXT_MAP = CATEGORY_TYPE_TEXT_MAP;
  protected readonly CATEGORY_COLOR_MAP = CATEGORY_COLOR_MAP;
}
