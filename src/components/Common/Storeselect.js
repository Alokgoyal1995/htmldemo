import React from 'react';
import { NavLink } from 'react-router-dom';

class Storeselect extends React.Component {
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
                                <div className="select-food">
                                    <h3>Select Food Categories to sell:</h3>
                                    <div className="food-categories-box">
                                        <div className="control-group">
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" defaultChecked="checked" />
                                                <div className="control__indicator">Pizza</div>
                                            </label>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" />
                                                <div className="control__indicator">Salad</div>
                                            </label>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" />
                                                <div className="control__indicator">Papa’tizers</div>
                                            </label>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" />
                                                <div className="control__indicator">Papa’s Sub</div>
                                            </label>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" />
                                                <div className="control__indicator">Pitas</div>
                                            </label>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" />
                                                <div className="control__indicator">Papa’s Dinner</div>
                                            </label>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" />
                                                <div className="control__indicator">Sides</div>
                                            </label>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" />
                                                <div className="control__indicator">Beverages</div>
                                            </label>
                                            <label className="control control--checkbox">
                                                <input type="checkbox" name="checkbox" />
                                                <div className="control__indicator">Dessert</div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addstore-footer">
                            <div className="store-footer-left">
                                <NavLink to="/dashboard/store/addstore">
                                    <button className="btn btn-cancel">Cancel</button>
                                </NavLink>
                            </div>
                            <div className="store-footer-right">
                                <button className="btn btn-cancel">SAVE &amp; QUIT</button>
                                <NavLink to="/dashboard/store/addstore/2">
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
export default Storeselect;