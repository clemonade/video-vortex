import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from "@angular/core";
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonModal,
  IonToolbar,
} from "@ionic/angular/standalone";
import { ListComponent } from "../../shared/components/list/list.component";
import { CardComponent } from "../../shared/components/card/card.component";
import { ActionComponent } from "../../shared/components/action/action.component";
import { PlayerService } from "../../core/services/player.service";
import { Total } from "../../shared/components/card/card.model";
import { Action } from "../../core/models/app.model";

@Component({
  selector: "app-home",
  imports: [
    IonContent,
    ActionComponent,
    IonFab,
    IonFabButton,
    IonIcon,
    ListComponent,
    IonToolbar,
    IonHeader,
    CardComponent,
    IonModal,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  playerService = inject(PlayerService);

  actionToEditIndex?: number;
  isActionModalOpen: boolean = false;

  total$ = computed<Total>(() => {
    return {
      forward: this.playerService.totalForward$(),
      rewind: this.playerService.totalRewind$(),
      money: this.playerService.totalMoney$(),
    };
  });

  onEditAction(index: number) {
    this.actionToEditIndex = index;
    this.isActionModalOpen = true;
  }

  onUpdateAction(action: Action) {
    if (this.actionToEditIndex !== undefined) {
      this.playerService.updateAction(this.actionToEditIndex, action);
      this.onModalDidDismiss();
    }
  }

  onModalDidDismiss() {
    this.actionToEditIndex = undefined;
    this.isActionModalOpen = false;
  }
}
