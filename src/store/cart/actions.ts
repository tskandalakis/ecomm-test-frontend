import { Product, ADD_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT, EMPTY_CART, CartActionTypes } from './types'

export function addProduct(newProduct: Product): CartActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: newProduct
  }
}

export function updateProduct(updatedProduct: Product): CartActionTypes {
  return {
    type: UPDATE_PRODUCT,
    payload: updatedProduct
  }
}

export function removeProduct(timestamp: number): CartActionTypes {
  return {
    type: REMOVE_PRODUCT,
    meta: {
      timestamp
    }
  }
}

export function emptyCart(): CartActionTypes {
  return {
    type: EMPTY_CART
  }
}