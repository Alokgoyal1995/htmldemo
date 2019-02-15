import React from 'react';
import { NavLink } from 'react-router-dom';

class Storeadd extends React.Component {
    render() {
        return (
            <div className="main-content-area">
                <div className="addstore-section">
                    <div className="addstore-box">
                        <div className="addstore-header">
                            <h3>Add Store</h3>
                            <div className="store-status">
                                <div id="toggles">
                                    <input type="checkbox" name="checkbox1" id="checkbox3" className="ios-toggle" defaultChecked />
                                    <label htmlFor="checkbox3" className="checkbox-label" data-off="Inactive" data-on="Active" />
                                </div>
                            </div>
                        </div>
                        <div className="addstore-body">
                            <div id="slimScrollstore">
                                <div className="addstore-form">
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-5">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Store #</label>
                                                        <div className="storeid">PR117</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Zip Code</label>
                                                        <input type="text" className="form-control" defaultValue={48226} />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control" defaultValue="615 Griswold St." />
                                            </div>
                                            <div className="form-group">
                                                <label>Timings</label>
                                                <div className="position-relative">
                                                    <input type="text" className="form-control" placeholder="Select timings" />
                                                    <span className="timing-icon"><img src="../../images/calendar_icon.svg" /></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Tax Applicable On Delivery (True/False)</label>
                                                <div className="position-relative">
                                                    <div className="tax-switch">
                                                        <div className="false-label">False</div>
                                                        <div id="toggles2">
                                                            <input type="checkbox" name="checkbox1" id="checkbox4" className="ios-toggle" defaultChecked />
                                                            <label htmlFor="checkbox4" className="checkbox-label" />
                                                        </div>
                                                        <div className="true-label">True</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>POS</label>
                                                <div className="selectdiv">
                                                    <select>
                                                        <option>Revention</option>
                                                        <option>Revention1</option>
                                                        <option>Revention2</option>
                                                        <option>Revention3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 offset-lg-0 col-xl-6 offset-xl-1">
                                            <div className="row">
                                                <div className="col-lg-6 col-xl-5">
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <input type="text" className="form-control" defaultValue="MI" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 offset-lg-0 col-xl-5 offset-xl-2">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input type="text" className="form-control" defaultValue="Detroit" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-xl-5">
                                                    <div className="form-group">
                                                        <label>Fax <span className="faxspan">(wihout country code)</span></label>
                                                        <input type="text" className="form-control" defaultValue="313-964-4600" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 offset-lg-0 col-xl-5 offset-xl-2">
                                                    <div className="form-group">
                                                        <label>Phone No.</label>
                                                        <input type="text" className="form-control" defaultValue="313-964-7777" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-xl-5">
                                                    <div className="form-group">
                                                        <label>Delivery Distance</label>
                                                        <div className="position-relative">
                                                            <input type="text" className="form-control" defaultValue={3} />
                                                            <span className="dis-unit">miles</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 offset-lg-0 col-xl-5 offset-xl-2">
                                                    <div className="form-group">
                                                        <label>Delivery Charge</label>
                                                        <div className="position-relative">
                                                            <input type="text" className="form-control" defaultValue={5.00} />
                                                            <span className="dis-unit">USD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-xl-5">
                                                    <div className="form-group">
                                                        <label>Tax Rate</label>
                                                        <div className="position-relative">
                                                            <input type="text" className="form-control" defaultValue={6.00} />
                                                            <span className="dis-unit">USD</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 offset-lg-0 col-xl-5 offset-xl-2">
                                                    <div className="form-group">
                                                        <label>Pickup</label>
                                                        <div className="selectdiv">
                                                            <select>
                                                                <option>20</option>
                                                                <option>21</option>
                                                                <option>22</option>
                                                                <option>23</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-xl-5">
                                                    <div className="form-group">
                                                        <label>Delivery Now</label>
                                                        <div className="selectdiv">
                                                            <select>
                                                                <option>40</option>
                                                                <option>21</option>
                                                                <option>22</option>
                                                                <option>23</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 offset-lg-0 col-xl-5 offset-xl-2">
                                                    <div className="form-group">
                                                        <label>Delivery Later</label>
                                                        <div className="selectdiv">
                                                            <select>
                                                                <option>40</option>
                                                                <option>21</option>
                                                                <option>22</option>
                                                                <option>23</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addstore-footer">
                            <div className="store-footer-left">
                                <NavLink to="/dashboard/store">
                                    <button className="btn btn-cancel">Cancel</button>
                                </NavLink>
                            </div>
                            <div className="store-footer-right">
                                <button className="btn btn-cancel">SAVE &amp; QUIT</button>
                                <NavLink to="/dashboard/store/addstore/1">
                                    <button className="btn btn-info continue-btn">SAVE &amp; CONTINUE</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Storeadd;