import {
  CartState,
  CartActionTypes,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  EMPTY_CART
} from './types'

const initialState: CartState = {
  products: []
}

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload]
      }
    case UPDATE_PRODUCT:
      return {
        products: [...state.products, action.payload]
      }
    case REMOVE_PRODUCT:
      return {
        products: state.products.filter(
          product => product.timestamp !== action.meta.timestamp
        )
      }
    case EMPTY_CART:
      return {
        products: []
      }
    default:
      return state
  }
}