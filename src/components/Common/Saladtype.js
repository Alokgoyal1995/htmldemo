import React from 'react';
import { NavLink } from 'react-router-dom';

class Saladtype extends React.Component {
    render() {
        return (
            <div>
                <div className="addstore-header">
                    <h3>Salad — Step 3/3</h3>
                    <div className="store-status">
                        <div id="toggles">
                            <input type="checkbox" name="checkbox1" id="checkbox3" className="ios-toggle" defaultChecked />
                            <label htmlFor="checkbox3" className="checkbox-label" data-off="Inactive" data-on="Active" />
                        </div>
                    </div>
                </div>
                <h1>Salad types</h1>
                <div className="addstore-footer">
                    <div className="store-footer-left">
                        <NavLink to="/dashboard/store/addstore/6">
                            <button className="btn btn-cancel">Cancel</button>
                        </NavLink>
                    </div>
                    <div className="store-footer-right">
                        <button className="btn btn-cancel">SAVE &amp; QUIT</button>
                        <NavLink to="/dashboard/store/addstore/8">
                            <button className="btn btn-info continue-btn">SAVE &amp; CONTINUE</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Saladtype;