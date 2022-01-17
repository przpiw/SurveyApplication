import {
  RESPONSE_PUSH,
  RESPONSE_SUBMIT,
  RESPONSE_FAIL,
  RESPONSE_CLEAR,
} from '../types/responseTypes'

export const surveyResponseReducer = (state = { responses: [] }, action:any) => {
  switch (action.type) {
    case RESPONSE_PUSH: {
      console.log(action.payload)
      if (!state.responses.length) {
        return { ...state, responses: [action.payload] }
      } else {
        return {...state, responses:[ ...state.responses, action.payload]}     
    }
  }
    case RESPONSE_CLEAR: {
      return (state = { responses: [] })
    }
    default:
      return state
  }
}