import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../modules/actions/authActions';
import Pushbar from './pushbar';

export default class Header extends Component {
  constructor(props){
    super(props);

  }
  logout(e){
    e.preventDefault();
    this.props.logout();
  }
  componentDidMount(){
    // var addScript = document.createElement('script')
    // addScript.setAttribute(
    //   'src',
    //   './pushbar.js'
    // )
    // document.body.appendChild(addScript)
    // // var pushbar = new Pushbar({
    //   blur:true,
    //   overlay:true,
    // });
  }
  render(){

     const { isAuthenticated,user } = this.props.auth;

      console.log("in gheader")
        return (

        <header className="header" id="header">
          <div className="menu-icon">
          <span data-pushbar-target="left">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14"><path className="a" d="M3,20h7V17.667H3ZM3,6V8.333H24V6Zm0,8.167H17V11.833H3Z" transform="translate(-3 -6)"/></svg>
          </span> </div>

         <div className="header-right">
          <div className="search-box">
              <input type="text" className="form-control" placeholder="Looking for something?"/>
          </div>
          <a href="#" onClick={this.logout.bind(this)}>Logout</a>
          <div className="brand-icon">
              <img src="/images/brand1.svg"/>
          </div>
          </div>
        </header>

        )
    }
}
