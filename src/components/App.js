import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './dashboard/';
import Login from './Login';
import Phonenumber from './Login/phonenumber';
import Otp from './Login/otp';
import Changepassword from './Login/changepassword';
import Brand from './brand';
import Customer from './customer';
import requireAuth from '../modules/utils/requireAuth';
import Store from '../components/store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route path="/dashboard" component={requireAuth(Home)} />
          <Route exact path='/phonenumber' component={Phonenumber} />
          <Route exact path='/otp' component={Otp} />
          <Route exact path='/changepassword' component={Changepassword} />
          <Route exact path='/brand' component={Brand} />
          <Route exact path='/customer' component={Customer} />
        </Switch>
      </div>
    );
  }
}

export default App;
