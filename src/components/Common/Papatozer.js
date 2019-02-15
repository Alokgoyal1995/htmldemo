import React from 'react';
import { NavLink } from 'react-router-dom';

class Papatozer extends React.Component {
    render() {
        return (
            <div className="main-content-area">
                <div className="addstore-section">
                    <div className="addstore-box">
                        <div className="addstore-header">
                            <h3>Papa’tizers — Step 1/2</h3>
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
                                    <h3>Papa’tizer Types</h3>
                                    <div className="food-categories-box select-crusts select-papatizer">
                                        <div className="control-group">
                                            <h6>Select papa’tizer types</h6>
                                            <div className="crusts-row">
                                                <div className="round-crusts">
                                                    <div className="crusts-list">
                                                        <h6>Size</h6>
                                                        <ul>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    Bambino Bread
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    PAPA’S CHEESY BREAD (16 PCS)
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    DEEP DISH CHEESE STICKS (10 PCS)
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    PAPA’S STEAK FRIES (1 LB)
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    PAPA’S WINGZ (1 LB)
                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="control control--checkbox">
                                                                    <input type="checkbox" />
                                                                    <div className="control__indicator" />
                                                                    CHICKEN FINGERS (5 PCS)
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
                                <NavLink to="/dashboard/store/addstore/7">
                                    <button className="btn btn-cancel">Cancel</button>
                                </NavLink>
                            </div>
                            <div className="store-footer-right">
                                <button className="btn btn-cancel">SAVE &amp; QUIT</button>
                                <NavLink to="/dashboard/store/addstore/9">
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
export default Papatozer;