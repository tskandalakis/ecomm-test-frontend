export interface SystemState {
  loggedIn: boolean
  session: string
  user: UserObject|null
}

export interface UserObject {
  id: string
  username: string
  email: string
  profile_pic: string
}

export const UPDATE_SESSION = 'UPDATE_SESSION'
export const DELETE_SESSION = 'DELETE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

interface DeleteSessionAction {
  type: typeof DELETE_SESSION
}

export type SystemActionTypes = UpdateSessionAction | DeleteSessionAction