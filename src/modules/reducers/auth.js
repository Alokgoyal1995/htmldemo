import * as types from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  success: false,
  error: false,
  loading: false,
  res: {},
  from: ''
};

export default (state = initialState, {type, payload}) => {
    switch(type) {
      case types.SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(payload),
          user: payload
        }

      default: return state;
    } 
}
export const sendOtp = (state = initialState, { type, payload, from }) => {
  switch(type){
    case types.OTP_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        res: {},
        isAuthenticated: false,
        user: {},
        from
      }
    case types.OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        res: payload,
        isAuthenticated: false,
        user: {},
        from
      }
    case types.OTP_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        res: payload,
        isAuthenticated: false,
        user: {},
        from
      }
  }
}