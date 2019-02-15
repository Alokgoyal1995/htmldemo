import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { logout } from '../../modules/actions/authActions';
import Header from '../layout/header';
import Asidebar from '../layout/asidebar';
import SideBar from '../layout/sidebar';
import Home from "./home";
import Store from "../store";

class Main extends Component {
  render() {
    //   console.log("==========",this.props.auth)
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Header auth={this.props.auth} logout={this.props.logout} />
        <Asidebar />
        <div className="wrapper">
          <SideBar />
          {/* < Home />  */}
          <Route path="/dashboard" exact component={Home} />
          <Route path="/dashboard/store" component={Store} />

          {/* <Route path="/dashboard/store/addstore" component={store} /> */}

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
export default connect(mapStateToProps, { logout })(Main);
