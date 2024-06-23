interface Value {
  value: number;
}

export type Runtime = {
  category: "runtime";
  type: "forward" | "rewind" | "timeshift";
} & Value;

export type Money = {
  category: "money";
  type: "credit" | "debit";
} & Value;

export type Action = Runtime | Money;

export type Category = Action["category"];
export type Type = Action["type"];
