import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonToolbar} from "@ionic/angular/standalone";
import {addIcons} from 'ionicons';
import {add} from 'ionicons/icons'
import {ListComponent} from "../../shared/components/list/list.component";
import {CardComponent} from "../../shared/components/card/card.component";
import {ActionComponent} from "../../shared/components/action/action.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonContent,
    ActionComponent,
    IonFab,
    IonFabButton,
    IonIcon,
    ListComponent,
    IonToolbar,
    IonHeader,
    CardComponent
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
