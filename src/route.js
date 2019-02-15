import React, {Component} from "react";
import { Router, Route, Link} from "react-router-dom";

import Home from './components/Login/login';
import Phonenumber from './components/Login/phonenumber';
import Otp from './components/Login/otp';
import Changepassword from './components/Login/changepassword';


class Routers extends Component{

    render(){

        return (

            <Router>
             <div>

                <Route exact path='/' component={Home} />
                <Route exact path='/phonenumber' component={Phonenumber} />
                <Route exact path='/otp' component={otp} />
                <Route exact path='/Changepassword' component={Changepassword} />

             </div>
            </Router>
        )
    }
}

export default Routers;