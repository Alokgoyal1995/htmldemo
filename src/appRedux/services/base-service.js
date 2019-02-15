import axios from 'axios';
import setAuthorizationToken from '../../modules/utils/setAuthorizationToken';
import setAuthorizationStoreId from '../../modules/utils/setAuthorizationStoreId';
import setAuthorizationBrand from '../../modules/utils/setAuthorizationBrand';
import jwtDecode from 'jwt-decode';
import * as types from '../actions/types';
import config from '../../env-config';
export const baseUrl = `${config.api}/`;

const baseService = axios.create({
    baseURL: baseUrl
});

baseService.addAuthToken = () => {
    let user = JSON.parse(localStorage.getItem('jwtToken'));
    baseService.defaults.headers.common['Authorization'] = 'bearer '+`${user.token}`;
};

baseService.removeAuthToken = () => {
    sessionStorage.removeItem('userData');
    baseService.defaults.headers.common['Authorization'] = '';
    // history.push('/signin');
};

baseService.interceptors.response.use((config) => {
    return config;
}, (error) => {
    if (error.response.status === 401) {
        baseService.removeAuthToken();
    }
    return window.Promise.reject(error);
});

if (sessionStorage.getItem('userData')) {
    baseService.addAuthToken();
}

export default baseService;