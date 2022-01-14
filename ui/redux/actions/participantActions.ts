import axios from 'axios'
import {
  PARTICIPANT_LIST_REQUEST,
  PARTICIPANT_LIST_SUCCESS,
  PARTICIPANT_LIST_FAIL,
} from '../types/participantTypes'

export const listParticipants = (classroomId:string) => async (dispatch, getState) => {
  try {
    dispatch({ type: PARTICIPANT_LIST_REQUEST })
    const { data } = await axios.get(
      `/api/students/classroom/${classroomId}`,{withCredentials}
    )
    dispatch({
      type: PARTICIPANT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PARTICIPANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

