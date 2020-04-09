import { SystemState, SystemActionTypes, UPDATE_SESSION, DELETE_SESSION } from './types'
import { deleteState } from '../localStorage';

const initialState: SystemState = {
  loggedIn: false,
  session: '',
  user: null
}

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    case DELETE_SESSION: {
      deleteState();
      return initialState
    }
    default:
      return state
  }
}