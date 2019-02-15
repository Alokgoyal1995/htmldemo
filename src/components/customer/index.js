import React, {Component} from 'react';
import {Link, Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { logout } from '../../modules/actions/authActions';
import Header from '../layout/header';
import Asidebar from '../layout/asidebar';
import SideBar from '../layout/sidebar';
import Customer from "../customer/customers"; 
 
 class CustomerPage extends Component {
    render(){
    //   console.log("==========",this.props.auth)
      const { isAuthenticated } = this.props.auth;
      
        return (
          <div>
            <Header auth={this.props.auth} logout={this.props.logout}/>
            <Asidebar />
            <div className="wrapper">
            <SideBar />
            <Customer /> 
            </div>
           
         </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps, { logout })(CustomerPage);
