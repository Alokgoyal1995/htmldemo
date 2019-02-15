import baseService from './base-service';

export function login(data){
    return baseService.post('/v1/adminconsole/login',data);
}