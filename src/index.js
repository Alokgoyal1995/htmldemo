import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Login from './components/Login/Login';
// import Phonenumber from './components/Login/Phonenumber';
// import Otp from './components/Login/Otp';
// import Changepassword from './components/Login/changepassword';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './appRedux/store'
import setAuthorizationToken from './modules/utils/setAuthorizationToken';
import setAuthorizationStoreId from './modules/utils/setAuthorizationStoreId';
import setAuthorizationBrand from './modules/utils/setAuthorizationBrand';
import { setCurrentUser } from './modules//actions/authActions';
// import jwtDecode from 'jwt-decode';
import App from './components/App'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

if (localStorage.jwtToken) {
    const user=JSON.parse(localStorage.jwtToken);
    store.dispatch(setCurrentUser(user));
    setAuthorizationToken(user.token);
    setAuthorizationStoreId(user.store.uuid);
    setAuthorizationBrand(user.brand_uuid);
  }

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
     
        <App />
      
    </ConnectedRouter>
  </Provider>,  

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();  
