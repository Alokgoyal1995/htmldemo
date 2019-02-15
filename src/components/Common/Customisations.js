import React from 'react';
import { NavLink } from 'react-router-dom';

class Customisation extends React.Component {
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
                                    <div className="blue-box-header">
                                        <h3>Customisations and Prices</h3>
                                        <div className="price-note">*Prices can be customised.</div>
                                    </div>
                                    <div className="customisation-wraper">
                                        <h6 className="tapping-head">Bambino Bread</h6>
                                        <div className="customisation-row">
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Options</td>
                                                                <td width={120}>Price</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>5 Pieces</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>10 Pieces</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/*second row*/}
                                        <h6 className="tapping-head">PAPA’S CHEESY BREAD (16 PCS)</h6>
                                        <div className="customisation-row">
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Options</td>
                                                                <td width={120}>Price</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>1 unit</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Toppings</td>
                                                                <td width={120}>Price</td>
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
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>Bacon</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>Feta</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/*third row*/}
                                        <h6 className="tapping-head">DEEP DISH CHEESE STICKS (10 PCS)</h6>
                                        <div className="customisation-row">
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Options</td>
                                                                <td width={120}>Price</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>1 unit</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Toppings</td>
                                                                <td width={120}>Price</td>
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
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>Bacon</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>Feta</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/*fourth row*/}
                                        <h6 className="tapping-head">PAPA’S STEAK FRIES (1 LB)</h6>
                                        <div className="customisation-row">
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Options</td>
                                                                <td width={120}>Price</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>1 unit</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/*fifth row*/}
                                        <h6 className="tapping-head">PAPA’S WINGZ (1 LB)</h6>
                                        <div className="customisation-row">
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Options</td>
                                                                <td width={120}>Price</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>Boneless</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>Regular</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Dressings</td>
                                                                <td width={120}>Price</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>Ranch</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>BBQ</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/*sixth row*/}
                                        <h6 className="tapping-head">CHICKEN FINGERS (5 PCS)</h6>
                                        <div className="customisation-row">
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Options</td>
                                                                <td width={120}>Price</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>1 unit</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="customisation-box">
                                                <div className="tapping-table customer-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>Dressings</td>
                                                                <td width={120}>Price</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>Ranch</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="control control--checkbox">
                                                                        <input type="checkbox" />
                                                                        <div className="control__indicator" />
                                                                        <span>BBQ</span>
                                                                    </label>
                                                                </td>
                                                                <td><input type="text" className="size-price" defaultValue={5.00} /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="addstore-footer">
                            <div className="store-footer-left">
                                <NavLink to="/dashboard/store/addstore/8">
                                    <button className="btn btn-cancel">Cancel</button>
                                </NavLink>
                            </div>
                            <div className="store-footer-right">
                                <button className="btn btn-cancel">SAVE &amp; QUIT</button>
                                <NavLink to="/dashboard/store/addstore/10">
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
export default Customisation;