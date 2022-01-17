import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../types/userTypes'

export const userDetailsReducer = (state = {loading:true, user: [] }, action:any) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, user: [] }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
