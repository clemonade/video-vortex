import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./features/home/home.component").then(mod => mod.HomeComponent)
  },
  {
    path: "**",
    redirectTo: "",
  },
];
