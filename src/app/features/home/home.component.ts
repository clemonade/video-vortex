import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonToolbar} from "@ionic/angular/standalone";
import {addIcons} from 'ionicons';
import {add, create, trash} from 'ionicons/icons'
import {ListComponent} from "../../shared/components/list/list.component";
import {CardComponent} from "../../shared/components/card/card.component";
import {ActionComponent} from "../../shared/components/action/action.component";
import {PlayerService} from "../../core/services/player.service";
import {Total} from "../../shared/components/card/card.model";

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
  playerService = inject(PlayerService);

  total$ = computed<Total>(() => {
    return {
      forward: this.playerService.totalForward$(),
      rewind: this.playerService.totalRewind$(),
      money: this.playerService.totalMoney$()
    };
  })

  constructor() {
    addIcons({add, create, trash})
  }
}
