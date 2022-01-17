import {
  SURVEY_DETAILS_REQUEST,
  SURVEY_DETAILS_SUCCESS,
  SURVEY_DETAILS_FAIL,
} from '../types/surveyTypes'

export const surveyDetailsReducer = (state = { loading:true,survey: [] }, action:any) => {
  switch (action.type) {
    case SURVEY_DETAILS_REQUEST:
      return { loading: true, survey: [] }
    case SURVEY_DETAILS_SUCCESS:
      return { loading: false, survey: action.payload }
    case SURVEY_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
