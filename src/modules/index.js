import { combineReducers } from 'redux'
import counter from './counter'
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth'
export default combineReducers({
  counter,
  flashMessages,
  auth 
})
 