import React from 'react';
import { NavLink } from 'react-router-dom';

class Selectcrust extends React.Component {
    render() {
        return (
            <div className="main-content-area">
                <div className="addstore-section">
                    <div className="addstore-box">
                        <div className="addstore-header">
                            <h3>Pizza — Step 1/3</h3>
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
                                    <h3>Crusts and its Sizes</h3>
                                    <div className="food-categories-box select-crusts">
                                        <div className="control-group">
                                            <h6>Select Crusts</h6>
                                            <div className="crusts-row">
                                                <div className="round-crusts">
                                                    <label className="control control--checkbox">
                                                        <input type="checkbox" name="checkbox" defaultChecked="checked" />
                                                        <div className="control__indicator">Round</div>
                                                    </label>
                                                    <div className="crusts-list">
                                                        <h6>Size</h6>
                                                        <ul>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    Bambino
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    Medium
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    Large
                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="square-deep">
                                                    <label className="control control--checkbox">
                                                        <input type="checkbox" name="checkbox" />
                                                        <div className="control__indicator">Square Deep Dish</div>
                                                    </label>
                                                    <div className="crusts-list">
                                                        <h6>Size</h6>
                                                        <ul>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    4 Corners
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    Large
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    XLarge
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    Jumbo Pak
                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="thin-crusts">
                                                    <label className="control control--checkbox">
                                                        <input type="checkbox" name="checkbox" />
                                                        <div className="control__indicator">Thin</div>
                                                    </label>
                                                    <div className="crusts-list">
                                                        <h6>Size</h6>
                                                        <ul>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    Medium
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    Large
                                </label>
                                                            </li>
                                                        </ul>
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
                                <NavLink to="/dashboard/store/addstore/1">
                                    <button className="btn btn-cancel">Cancel</button>
                                </NavLink>
                            </div>
                            <div className="store-footer-right">
                                <button className="btn btn-cancel">SAVE &amp; QUIT</button>
                                <NavLink to="/dashboard/store/addstore/3">
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
export default Selectcrust;