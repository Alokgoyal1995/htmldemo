import { combineReducers } from 'redux'
import counter from './counter'
import flashMessages from './flashMessages';
import auth from './auth'
export default combineReducers({
  counter,
  flashMessages,
  auth 
})
 