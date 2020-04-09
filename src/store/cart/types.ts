export interface Product {
  id: string
  name: string,
  title: string,
  description: string,
  qty: number,
  timestamp: number
}

export interface CartState {
  products: Product[]
}

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const EMPTY_CART = 'EMPTY_CART'

interface AddProductAction {
  type: typeof ADD_PRODUCT
  payload: Product
}

interface UpdateProductAction {
  type: typeof UPDATE_PRODUCT
  payload: Product
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT
  meta: {
    timestamp: number
  }
}

interface EmptyCartAction {
  type: typeof EMPTY_CART
}

export type CartActionTypes = AddProductAction | UpdateProductAction | RemoveProductAction | EmptyCartAction