import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (


      <div className="main-content-area">
        <h1>Dashboard</h1>
        <div className="dashboard-boxes">
          <ul className="clearfix">
            <li>
              <NavLink to="">
                <span className="dash-icon"><img src="images/marketing.svg" /></span>
                <span className="dash-icon-title">Marketing</span>
              </NavLink></li>
            <li>
              <NavLink to="">
                <span className="dash-icon">
                  <img src="images/mastermenu.svg" /></span><span className="dash-icon-title">Master Menu</span></NavLink></li>
            <li>
              <NavLink to="">
                <span className="dash-icon">
                  <img src="images/taxes.svg" /></span><span className="dash-icon-title">Taxes</span></NavLink></li>
            <li>
              <NavLink to="">
                <span className="dash-icon"><img src="images/reporting.svg" /></span>
                <span className="dash-icon-title">Reporting</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <span className="dash-icon"><img src="images/employee.svg" /></span>
                <span className="dash-icon-title">Employees</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/store">
                <span className="dash-icon"><img src="images/stores.svg" />
                </span><span className="dash-icon-title">Stores</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <span className="dash-icon"><img src="images/customers.svg" />
                </span><span className="dash-icon-title">Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <span className="dash-icon"><img src="images/mobile.svg" /></span>
                <span className="dash-icon-title">Mobile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

export default Home;
