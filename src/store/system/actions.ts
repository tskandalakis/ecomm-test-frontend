import { SystemState, UPDATE_SESSION, DELETE_SESSION, SystemActionTypes } from './types'

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}

export function deleteSession(): SystemActionTypes {
  return {
    type: DELETE_SESSION
  }
}