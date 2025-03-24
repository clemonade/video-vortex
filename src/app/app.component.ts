import { Component } from "@angular/core";
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { add, arrowDown, checkmark, create, trash } from "ionicons/icons";

@Component({
  selector: "app-root",
  imports: [IonApp, IonRouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  constructor() {
    addIcons({ add, create, trash, arrowDown, checkmark });
  }
}
