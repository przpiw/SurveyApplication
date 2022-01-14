import {
  PARTICIPANT_LIST_REQUEST,
  PARTICIPANT_LIST_SUCCESS,
  PARTICIPANT_LIST_FAIL,
} from '../types/participantTypes'

export const participantListReducer = (state = { students: [] }, action:any) => {
  switch (action.type) {
    case PARTICIPANT_LIST_REQUEST:
      return { loading: true, students: [] }
    case PARTICIPANT_LIST_SUCCESS:
      return { loading: false, students: action.payload }
    case PARTICIPANT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
