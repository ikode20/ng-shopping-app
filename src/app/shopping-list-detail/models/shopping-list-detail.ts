import { ShoppingItem } from "./shopping-item";

export interface ShoppingListDetail {
  id: string,
  name: string,
  items: ShoppingItem[]
}
