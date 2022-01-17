import {
  PARTICIPANT_LIST_REQUEST,
  PARTICIPANT_LIST_SUCCESS,
  PARTICIPANT_LIST_FAIL,
} from '../types/participantTypes'

export const participantListReducer = (state = { loading:true,participants: [] }, action:any) => {
  switch (action.type) {
    case PARTICIPANT_LIST_REQUEST:
      return { loading: true, participants: [] }
    case PARTICIPANT_LIST_SUCCESS:
      return { loading: false, participants: action.payload }
    case PARTICIPANT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
