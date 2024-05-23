import {Category, Type} from "../models/app.model";

export const MAX_FILL_VALUE = 25;

export const CATEGORY_COLOR_MAP: Record<Category, string> = {
  runtime: 'primary',
  money: 'warning',
}

export const CATEGORY_TYPE_TEXT_MAP: Record<Category | Type, string> = {
  runtime: 'Runtime',
  money: 'Money',
  forward: 'FWD',
  rewind: 'REW',
  timeshift: 'Timeshift',
  debit: 'Debit',
  credit: 'Credit',
}
