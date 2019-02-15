import React from 'react';
import { NavLink } from 'react-router-dom';

class Storedatalist extends React.Component {
    render() {
        return (
            <div className="main-content-area">
                <div className="customers-section">
                    <div className="dropdown show customer-menu">
                        <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Customers
            </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Menu</a>
                            <a className="dropdown-item" href="#">Taxes</a>
                            <a className="dropdown-item" href="#">Reporting</a>
                            <a className="dropdown-item" href="#">Employees</a>
                            <a className="dropdown-item" href="#">Stores</a>
                            <a className="dropdown-item" href="#">Customers</a>
                            <a className="dropdown-item" href="#">Mobile</a>
                        </div>
                    </div>
                    <div className="customer-table-top clearfix">
                        <div className="search-box">
                            <input type="text" className="form-control" placeholder="Search" />
                            <span className="search-icon"><img src="../images/search_icon.svg" /></span>
                        </div>
                        <div className="custormer-table-right">
                            <div className="customer-cities">CITIES - <span>ALL CITIES</span> </div>
                            <div className="customer-filter">
                                <a href="#"><img src="../images/filter.svg" width={16} /></a>
                            </div>
                        </div>

                        <NavLink to="/dashboard/store/addstore">
                            <div className="table-top-button">
                                <button className="btn btn-info new-store-btn" type="button">+ ADD NEW STORE</button>
                            </div>
                        </NavLink>


                    </div>
                    <div className="customer-table">
                        <div id="slimScrolltable">
                            <div className="table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm control-group">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th width={20} className="table-checkbox">
                                                <label className="control control--checkbox">
                                                    <input type="checkbox" defaultChecked="checked" />
                                                    <div className="control__indicator" />
                                                </label>
                                            </th>
                                            <th>Store ID</th>
                                            <th className="store-address">Store Address</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Phone No.</th>
                                            <th>Status</th>
                                            <th>POS Name</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="table-checkbox">
                                                <label className="control control--checkbox">
                                                    <input type="checkbox" />
                                                    <div className="control__indicator" />
                                                </label>
                                            </td>
                                            <td>#BJC0039</td>
                                            <td className="store-address">57 W 6th St, Ste Q Peuble… <a href="#" className="d-inline-block"><img src="../images/down_arrow.svg" width={8} /></a></td>
                                            <td>Denver</td>
                                            <td>Colorado</td>
                                            <td>+1 123 456 7890</td>
                                            <td className="text-danger">Inactive</td>
                                            <td>John Doe Co</td>
                                            <td className="text-center">
                                                <div className="dropdown show customer-menu">
                                                    <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Action
                          </a>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a className="dropdown-item" href="#">Action 1</a>
                                                        <a className="dropdown-item" href="#">Action 2</a>
                                                        <a className="dropdown-item" href="#">Action 3</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-checkbox">
                                                <label className="control control--checkbox">
                                                    <input type="checkbox" />
                                                    <div className="control__indicator" />
                                                </label>
                                            </td>
                                            <td>#BJC0039</td>
                                            <td>57 W 6th St, Ste Q Peuble… <a href="#" className="d-inline-block"><img src="../images/down_arrow.svg" width={8} /></a></td>
                                            <td>Denver</td>
                                            <td>Colorado</td>
                                            <td>+1 123 456 7890</td>
                                            <td className="text-blue">Active</td>
                                            <td>John Doe Co</td>
                                            <td className="text-center">
                                                <div className="dropdown show customer-menu">
                                                    <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Action
                          </a>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a className="dropdown-item" href="#">Action 1</a>
                                                        <a className="dropdown-item" href="#">Action 2</a>
                                                        <a className="dropdown-item" href="#">Action 3</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-checkbox">
                                                <label className="control control--checkbox">
                                                    <input type="checkbox" />
                                                    <div className="control__indicator" />
                                                </label>
                                            </td>
                                            <td>#BJC0039</td>
                                            <td>57 W 6th St, Ste Q Peuble… <a href="#" className="d-inline-block"><img src="../images/down_arrow.svg" width={8} /></a></td>
                                            <td>Denver</td>
                                            <td>Colorado</td>
                                            <td>+1 123 456 7890</td>
                                            <td className="text-blue">Active</td>
                                            <td>John Doe Co</td>
                                            <td className="text-center">
                                                <div className="dropdown show customer-menu">
                                                    <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Action
                          </a>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a className="dropdown-item" href="#">Action 1</a>
                                                        <a className="dropdown-item" href="#">Action 2</a>
                                                        <a className="dropdown-item" href="#">Action 3</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-checkbox">
                                                <label className="control control--checkbox">
                                                    <input type="checkbox" />
                                                    <div className="control__indicator" />
                                                </label>
                                            </td>
                                            <td>#BJC0039</td>
                                            <td>57 W 6th St, Ste Q Peuble… <a href="#" className="d-inline-block"><img src="../images/down_arrow.svg" width={8} /></a></td>
                                            <td>Denver</td>
                                            <td>Colorado</td>
                                            <td>+1 123 456 7890</td>
                                            <td className="text-blue">Active</td>
                                            <td>John Doe Co</td>
                                            <td className="text-center">
                                                <div className="dropdown show customer-menu">
                                                    <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Action
                          </a>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a className="dropdown-item" href="#">Action 1</a>
                                                        <a className="dropdown-item" href="#">Action 2</a>
                                                        <a className="dropdown-item" href="#">Action 3</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-checkbox">
                                                <label className="control control--checkbox">
                                                    <input type="checkbox" />
                                                    <div className="control__indicator" />
                                                </label>
                                            </td>
                                            <td>#BJC0039</td>
                                            <td>57 W 6th St, Ste Q Peuble… <a href="#" className="d-inline-block"><img src="../images/down_arrow.svg" width={8} /></a></td>
                                            <td>Denver</td>
                                            <td>Colorado</td>
                                            <td>+1 123 456 7890</td>
                                            <td>Active</td>
                                            <td className="text-blue">John Doe Co</td>
                                            <td className="text-center">
                                                <div className="dropdown show customer-menu">
                                                    <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Action
                          </a>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a className="dropdown-item" href="#">Action 1</a>
                                                        <a className="dropdown-item" href="#">Action 2</a>
                                                        <a className="dropdown-item" href="#">Action 3</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="table-checkbox">
                                                <label className="control control--checkbox">
                                                    <input type="checkbox" />
                                                    <div className="control__indicator" />
                                                </label>
                                            </td>
                                            <td>#BJC0039</td>
                                            <td>57 W 6th St, Ste Q Peuble… <a href="#" className="d-inline-block"><img src="../images/down_arrow.svg" width={8} /></a></td>
                                            <td>Denver</td>
                                            <td>Colorado</td>
                                            <td>+1 123 456 7890</td>
                                            <td className="text-blue">Active</td>
                                            <td>John Doe Co</td>
                                            <td className="text-center">
                                                <div className="dropdown show customer-menu">
                                                    <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Action
                          </a>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <a className="dropdown-item" href="#">Action 1</a>
                                                        <a className="dropdown-item" href="#">Action 2</a>
                                                        <a className="dropdown-item" href="#">Action 3</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Storedatalist;