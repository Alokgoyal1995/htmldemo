import axios from 'axios';

export function userSignupRequest(userData) {
  return disptach => {
    return axios.post('http://localhost:9000/api/users', userData);
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get('http://localhost:9000/api/users/' + identifier);
  }
}
