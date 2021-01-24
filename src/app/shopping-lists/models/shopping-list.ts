export interface ShoppingList {
  id: string,
  name: string,
  size: number
}

export interface FullShoppingList {
  id: string,
  name: string,
  items: { title: string, price: number }[]
}

