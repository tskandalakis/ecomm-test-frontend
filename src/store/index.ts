import { createStore, combineReducers } from "redux";
import throttle from 'lodash/throttle';
import { systemReducer } from './system/reducers'
import { cartReducer } from './cart/reducers'
import { loadState, saveState } from './localStorage';

const rootReducer = combineReducers({
  system: systemReducer,
  cart: cartReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState
  );

  store.subscribe(throttle(() => {
    saveState({
      system: store.getState().system,
      cart: store.getState().cart
    });
  }, 1000));

  return store;
}
