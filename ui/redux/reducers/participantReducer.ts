import {
  PARTICIPANT_LIST_REQUEST,
  PARTICIPANT_LIST_SUCCESS,
  PARTICIPANT_LIST_FAIL,
  PARTICIPANT_DETAILS_SAVE,
  PARTICIPANT_DETAILS_CLEAR,
  PARTICIPANT_UPDATE_SUBMIT_TIME
} from '../types/participantTypes'

export const participantListReducer = (state = { loading:true,participants: [] }, action:any) => {
  switch (action.type) {
    case PARTICIPANT_LIST_REQUEST:
      return { loading: true, participants: [] }
    case PARTICIPANT_LIST_SUCCESS:
      return { loading: false, participants: action.payload }
    case PARTICIPANT_UPDATE_SUBMIT_TIME:{
      return {...state,participants:state.participants.map((participant)=>{
        if(participant._id === action.payload.participantId){
            return {...participant,lastSubmit:action.payload.time}
        }
        else return participant      
      })}
    }
      
    case PARTICIPANT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const activeParticipantReducer = (state = {participant:{}},action:any) =>{
  switch(action.type){
    case PARTICIPANT_DETAILS_SAVE:
      return {participant:action.payload}
    case PARTICIPANT_DETAILS_CLEAR:
      return { participant:action.payload}
    default:
      return state
  }
}