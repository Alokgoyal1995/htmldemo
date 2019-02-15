import React, {Component} from 'react';  
class Customers extends Component {
  render() { 
    return(
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


            <div className="customer-table-top">
                <div className="search-box">
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="search-icon"><img src="images/search_icon.svg" /></span>
                </div>
                <div className="custormer-table-right">
                    <div className="customer-cities">CITIES - <span>ALL CITIES</span> </div>
                    <div className="customer-filter"><a href="#"><img src="images/filter.svg" width="16" /></a></div>
                </div>
            </div>

            <div className="customer-table">
                <div className="table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm control-group">
                    <table className="table ">
                        <thead>
                            <tr>
                            <th width="20" className="table-checkbox">
                                 <label className="control control--checkbox">
                                <input type="checkbox" />
                                <div className="control__indicator"></div>
                                </label></th>
                                <th className="add-circle"  width="20">&nbsp;</th>
                            <th>Name</th>
                            <th>Phone/I.D.</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Area Code</th>
                            <th>Total Orders</th>
                             <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="table-checkbox">
                                <label className="control control--checkbox">
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                                </label>
                            </td>
                            <td className="add-circle"><a href="#"><img src="images/add_circle.svg" width="18" /></a></td>
                            <td>John Doe</td>
                            <td>+1-123-634-6324</td>
                            <td>57 W 6th St, Ste Q Peuble, CO</td>
                            <td>Denver</td>
                            <td>81003</td>
                            <td>DN-10/PU-11/DN-2</td>
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
                            <td className="table-checkbox"><label className="control control--checkbox">
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                                </label></td>
                                <td className="add-circle"><a href="#"><img src="images/add_circle.svg" width="18" /></a></td>
                            <td>John Doe</td>
                            <td>+1-123-634-6324</td>
                            <td>57 W 6th St, Ste Q Peuble, CO</td>
                            <td>Denver</td>
                            <td>81003</td>
                            <td>DN-10/PU-11/DN-2</td>
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
                            <td className="table-checkbox"><label className="control control--checkbox">
                                <input type="checkbox"/>
                                <div className="control__indicator"></div>
                                </label></td>
                                <td className="add-circle"><a href="#"><img src="images/add_circle.svg" width="18" /></a></td>
                            <td>John Doe</td>
                            <td>+1-123-634-6324</td>
                            <td>57 W 6th St, Ste Q Peuble, CO</td>
                            <td>Denver</td>
                            <td>81003</td>
                            <td>DN-10/PU-11/DN-2</td>
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


    );
  }
}

export default Customers;
