import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonText
} from "@ionic/angular/standalone";
import {KeyValueTotal, Total} from "./card.model";
import {KeyValuePipe} from "@angular/common";
import {CATEGORY_TYPE_SHORT_TEXT_MAP} from "../../../core/constants/app.constant";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonText,
    KeyValuePipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  total = input<Total>({
    forward: 0,
    rewind: 0,
    money: 0
  })

  protected readonly CATEGORY_TYPE_SHORT_TEXT_MAP = CATEGORY_TYPE_SHORT_TEXT_MAP;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  compareFn = (_: KeyValueTotal) => 0;
}
