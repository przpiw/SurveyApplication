import axios from 'axios'
import {
  RESPONSE_PUSH,
  RESPONSE_SUBMIT_REQUEST,
  RESPONSE_SUBMIT_SUCCESS,
  RESPONSE_SUBMIT_FAIL,
  RESPONSE_CLEAR,
} from '../types/responseTypes'
import {
  PARTICIPANT_DETAILS_CLEAR,
 PARTICIPANT_UPDATE_SUBMIT_TIME
} from '../types/participantTypes'

export const addQuestionResponse = (answer) => async (dispatch, getState) => {
    dispatch({
    type: RESPONSE_PUSH,
    payload: answer,
  })
}

export const submitResponses = (surveyId,timeTaken) => async (dispatch, getState) => {
  try {

    dispatch({type:RESPONSE_SUBMIT_REQUEST})
     const 
      {response:{responses}}
     = getState()

      const 
      {activeParticipant:{participant}}
     = getState()
     
     const payload = {responses:[...responses],participantId:participant._id,surveyId:surveyId,completionTime:timeTaken}
     const {data}  = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/response`,payload,{withCredentials:true}
    )

    dispatch({type:RESPONSE_SUBMIT_SUCCESS,payload:data})

    // Updates locally last submit time for participant
    dispatch({type:PARTICIPANT_UPDATE_SUBMIT_TIME,payload:{participantId:participant._id,time:new Date().toISOString()}})

    dispatch({
    type: RESPONSE_CLEAR,
  })
  dispatch({
    type:PARTICIPANT_DETAILS_CLEAR
  })

  } catch (error) {
    dispatch({
      type: RESPONSE_SUBMIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}