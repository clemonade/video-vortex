import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IonContent, IonFab, IonFabButton, IonIcon} from "@ionic/angular/standalone";
import {ActionComponent} from "../action/action.component";
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons'
import {ListComponent} from "../list/list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonContent,
    ActionComponent,
    IonFab,
    IonFabButton,
    IonIcon,
    ListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor() {
    addIcons({add})
  }
}
