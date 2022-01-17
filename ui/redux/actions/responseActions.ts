import axios from 'axios'
import {
  RESPONSE_PUSH,
  RESPONSE_SUBMIT,
  RESPONSE_FAIL,
  RESPONSE_CLEAR,
} from '../types/responseTypes'


export const addQuestionResponse = (answer) => async (dispatch, getState) => {
  try {
    dispatch({
    type: RESPONSE_PUSH,
    payload: answer,
  })
  } catch (error) {
    dispatch({
      type: RESPONSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const submitResponses = () => async (dispatch, getState) => {
  try {
    dispatch({
    type: RESPONSE_CLEAR,
  })
  } catch (error) {
    dispatch({
      type: RESPONSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}