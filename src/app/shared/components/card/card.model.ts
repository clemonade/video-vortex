import {Category, Type} from "../../../core/models/app.model";
import {KeyValue} from "@angular/common";

type Key = Extract<Type, "forward" | "rewind"> | Extract<Category, "money">;

export type Total  = {[K in Key]: number};
export type KeyValueTotal = KeyValue<Key, number>;
