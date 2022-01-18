import { combineReducers } from 'redux';
import { activeParticipantReducer, participantListReducer } from './participantReducer';
import { surveyDetailsReducer } from './surveyReducer';
import { userDetailsReducer } from './userReducer';
import {surveyResponseReducer} from './responseReducer'

const reducer = combineReducers({
  loggedUser:userDetailsReducer,
  participantList:participantListReducer,
  survey:surveyDetailsReducer,
  response:surveyResponseReducer,
  activeParticipant:activeParticipantReducer
});
export default reducer