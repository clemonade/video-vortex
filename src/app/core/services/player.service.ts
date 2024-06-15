import {computed, Injectable, signal} from '@angular/core';
import {Action} from "../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  actions$ = signal<Action[]>([]);

  totalForward$ = computed(() => {
    return this.actions$()
      .filter(action => action.category === "runtime" && (action.type === "forward" || action.type === "timeshift"))
      .reduce((acc, runtime) => {
        acc += runtime.value;
        return acc;
      }, 0)
  })

  totalRewind$ = computed(() => {
    return this.actions$()
      .filter(action => action.category === "runtime" && (action.type === "rewind" || action.type === "timeshift"))
      .reduce((acc, runtime) => {
        acc += runtime.value;
        return acc;
      }, 0)
  })

  totalMoney$ = computed(() => {
    return this.actions$()
      .filter(action => action.category === "money")
      .reduce((acc, runtime) => {
        switch (runtime.type) {
          case "credit":
            acc += runtime.value;
            break
          case "debit":
            acc -= runtime.value;
        }
        return acc;
      }, 0)
  })

  addAction(newAction: Action) {
    this.actions$.update((actions) => [...actions, newAction]);
  }

  removeAction(index: number) {
    this.actions$.update(actions => actions.toSpliced(index, 1))
  }
}
