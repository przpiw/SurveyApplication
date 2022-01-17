import axios from 'axios'
import {
  PARTICIPANT_LIST_REQUEST,
  PARTICIPANT_LIST_SUCCESS,
  PARTICIPANT_LIST_FAIL,
} from '../types/participantTypes'


//This will list participants based on user groupId
export const listParticipants = () => async (dispatch, getState) => {
  try {
    const 
      {loggedUser:{user}}
     = getState()
   
    dispatch({ type: PARTICIPANT_LIST_REQUEST })
    
    const {data}  = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/participants/${user.groupId}`,{withCredentials:true}
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

