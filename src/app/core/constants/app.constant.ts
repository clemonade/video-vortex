import {Category, Type} from "../models/app.model";

export const MAX_FILL_LENGTH = 25;

export const CATEGORY_TYPE_COLOR_MAP: Record<Category | Type, string> = {
  runtime: 'primary',
  money: 'warning',
  forward: 'primary',
  rewind: 'secondary',
  timeshift: 'tertiary',
  credit: 'success',
  debit: 'danger',
}

export const CATEGORY_TYPE_TEXT_MAP: Record<Category | Type, string> = {
  runtime: 'Runtime',
  money: 'Money',
  forward: 'Forward',
  rewind: 'Rewind',
  timeshift: 'Timeshift',
  credit: 'Credit',
  debit: 'Debit',
}

export const CATEGORY_TYPE_SHORT_TEXT_MAP: Record<Category | Type, string> = {
  runtime: CATEGORY_TYPE_TEXT_MAP.runtime,
  money: '$',
  forward: 'FWD',
  rewind: 'REW',
  timeshift: 'TS',
  credit: '+ $',
  debit: '- $',
}
