import axios from 'axios';
import config from '../../env-config';

axios.defaults.headers.common['X-Api-Key'] = config.key;
//axios.defaults.headers.common['x-brand-id'] = 'b574e03d-4cfe-4a75-9ac5-cf0e0724e5ea';


    // https://qeatvp1fgj.execute-api.us-west-2.amazonaws.com/test
    // https://m789t0ab98.execute-api.us-west-2.amazonaws.com/uat
    // https://f21l49ma30.execute-api.us-west-2.amazonaws.com/dev

export function fetchOrders() {
  return dispatch => {
    return axios.get(`${config.api}/v1/admin/orders`);
  };
}

export function fetchCompletedOrders() {
  return dispatch => {
    return axios.get(`${config.api}/v1/admin/orders?order_status=completed`);
  };
}
export function recieveNotify(uuid) {
  return dispatch => {
    return axios.put(`${config.api}/v1/admin/orders/${uuid}/payment`)
  }
}
export function fetchOngoingOrders() {
  return dispatch => {;
    
    return axios.get(`${config.api}/v1/admin/orders?order_status=ongoing`);
   
  };
}

export function fetchCancleOrders() {
  return dispatch => {
    return axios.get(`${config.api}/v1/admin/orders?order_status=canceled`);
  };
}

export function orderStatusUpdate(uuid,status){
  console.log("action",{uuid,status});
  return dispatch => {
    var orderStatusPayload={
      "status":status
      }
    return axios.put(`${config.api}/v1/admin/orders/${uuid}`, orderStatusPayload,{headers: {"Content-Type": "application/json"}});
  }
}
