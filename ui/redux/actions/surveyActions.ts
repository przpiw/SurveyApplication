import axios from 'axios'
import {
  SURVEY_DETAILS_REQUEST,
  SURVEY_DETAILS_SUCCESS,
  SURVEY_DETAILS_FAIL,
} from '../types/surveyTypes'


export const getSurveyDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SURVEY_DETAILS_REQUEST })
    const 
      {loggedUser:{user}}
     = getState()

     // Get surveyId assigned for users group
    const {data:{surveyId}}  = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/group/${user.groupId}`,{withCredentials:true}
    )
    // Get survey data
    const {data}  = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/survey/${surveyId}`,{withCredentials:true}
    )
    dispatch({
      type: SURVEY_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SURVEY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}