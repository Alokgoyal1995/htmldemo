import React from 'react';
import { NavLink } from 'react-router-dom';

class Tooping extends React.Component {
    render() {
        return (
            <div className="main-content-area">
                <div className="addstore-section">
                    <div className="addstore-box">
                        <div className="addstore-header">
                            <h3>Papa’tizers — Step 2/3</h3>
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
                                    <div className="blue-box-header">
                                        <h3>Toppings</h3>
                                        <div className="price-note">*Prices can be customised.</div>
                                    </div>
                                    <h6 className="tapping-head">Select toppings and its prices as per crust sizes</h6>
                                    <div className="tapping-table customer-table">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                </tr><tr>
                                                    <td rowSpan={2}>Crusts</td>
                                                    <td colSpan={3}><div className="dish-title"><span>Round</span></div> </td>
                                                    <td colSpan={4}><div className="dish-title"><span>Square Deep Dish</span></div></td>
                                                    <td colSpan={2}><div className="dish-title"><span>Thin</span></div></td>
                                                </tr>
                                                <tr>
                                                    <td className="pizza-size-title">Bambino</td>
                                                    <td className="pizza-size-title">Medium</td>
                                                    <td className="pizza-size-title">Large</td>
                                                    <td className="pizza-size-title">4 Corners</td>
                                                    <td className="pizza-size-title">Large</td>
                                                    <td className="pizza-size-title">XLarge</td>
                                                    <td className="pizza-size-title">Jumbo Pak</td>
                                                    <td className="pizza-size-title">Medium</td>
                                                    <td className="pizza-size-title">Large</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="control control--checkbox">
                                                            <input type="checkbox" />
                                                            <div className="control__indicator" />
                                                            <span>Pepperoni</span>
                                                        </label>
                                                    </td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="control control--checkbox">
                                                            <input type="checkbox" />
                                                            <div className="control__indicator" />
                                                            <span>Pepperoni</span>
                                                        </label>
                                                    </td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="control control--checkbox">
                                                            <input type="checkbox" />
                                                            <div className="control__indicator" />
                                                            <span>Pepperoni</span>
                                                        </label>
                                                    </td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="control control--checkbox">
                                                            <input type="checkbox" />
                                                            <div className="control__indicator" />
                                                            <span>Pepperoni</span>
                                                        </label>
                                                    </td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                    <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addstore-footer">
                            <div className="store-footer-left">
                                <NavLink to="/dashboard/store/addstore/2">
                                    <button className="btn btn-cancel">Cancel</button>
                                </NavLink>
                            </div>
                            <div className="store-footer-right">
                                <button className="btn btn-cancel">SAVE &amp; QUIT</button>
                                <NavLink to="/dashboard/store/addstore/4">
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
export default Tooping;