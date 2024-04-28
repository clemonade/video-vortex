import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IonModal} from "@ionic/angular/standalone";

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [
    IonModal
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionComponent {
}
