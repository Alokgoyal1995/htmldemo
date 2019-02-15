import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import setAuthorizationStoreId from '../utils/setAuthorizationStoreId';
import setAuthorizationBrand from '../utils/setAuthorizationBrand';
import jwtDecode from 'jwt-decode';
import * as types from './types';
import config from '../../env-config';
export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    payload: user
  };
}



export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    setAuthorizationStoreId(false);
    setAuthorizationBrand(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data){
  console.log("pro", process.env, config.key)
  return dispatch => {
    axios.defaults.headers.common['X-Api-Key'] = config.key;
    var loginPayload={
    	 "staff": {
          "userId": data.identifier,
          "password":data.password
        }
    }

    return axios.post(`${config.api}/v1/adminconsole/login`, loginPayload).then(res => {
      const token = res.data.token;
      const uuid = res.data.store_uuid;
      const brand_uuid = res.data.brand_uuid;
      localStorage.setItem('jwtToken', JSON.stringify(res.data));
      setAuthorizationToken(token);
      setAuthorizationStoreId(uuid);
      setAuthorizationBrand(brand_uuid);
      dispatch(setCurrentUser(res.data));

    });
  }
}

export function sendOtp(data){
  console.log("Otp", data);
  let OtpPayload={
    "otp": {
     "country_code": "+91",
     "mobile": data
    }
  }
  let axiosConfig = {
    headers: {
        "X-Api-Key" :config.key,
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "x-brand-id" : "1517a719-01d8-4d06-86ca-a3213fb0b9a5"
    }
  };
  return dispatch => {
    // axios.defaults.headers.common['X-Api-Key'] = config.key;
    // var OtpPayload={
    // 	 "otp": {
    //       "country_code": "+91",
    //       "mobile": data.identifier
    //     }
    // }

    dispatch({
      type: types.OTP_LOADING
    })
    return axios.post(`${config.api}/v1/adminconsole/otp/new`, OtpPayload, axiosConfig)
    .then(res => {
      if(res.status === 200 || res.status === true){
        return dispatch({
          type: types.OTP_SUCCESS,
          payload: res.data,
          from: "otp"
        })
      }else{
        console.log("Response",res.data);
        return dispatch({
          type: types.OTP_ERROR,
          payload: res.data,
          from: "otp"
        })
      }
    })
    .catch(err => {
      console.log("otp err", err)
      return dispatch({
        type: types.OTP_ERROR,
        payload: err,
        from: "otp"
      })
    })
  }
}