import {
  RESPONSE_PUSH,
  RESPONSE_CLEAR,
  RESPONSE_SUBMIT_REQUEST,
  RESPONSE_SUBMIT_SUCCESS,
  RESPONSE_SUBMIT_FAIL,
} from '../types/responseTypes'

export const surveyResponseReducer = (state = { responses: [],loading:false,error:false,message:null }, action:any) => {
  switch (action.type) {
    case RESPONSE_PUSH: {
      if (!state.responses.length) {
        return { ...state, responses: [action.payload] }
      } else {
        return {...state, responses:[ ...state.responses, action.payload]}     
      }
    }
    case RESPONSE_SUBMIT_REQUEST:
        return { ...state, loading:true }
    case RESPONSE_SUBMIT_SUCCESS:
        return {...state,loading:false,error:false, message:action.payload}
    case RESPONSE_SUBMIT_FAIL:
        return {...state,loading:false,error:action.payload}   
    case RESPONSE_CLEAR: {
      return (state = { responses: [],loading:false,message:null })
    }
    default:
      return state
  }
}