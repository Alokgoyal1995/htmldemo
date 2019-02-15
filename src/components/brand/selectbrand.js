import React, { Component } from 'react';
class SelectBrand extends Component {
    render() {
        return (

            <div className="main-content-area">
                <h1>Choose a Brand</h1>
                <div className="control-group">

                    <label className="control control--radio">
                        <input type="radio" name="radio" checked="checked" />
                        <div className="control__indicator"><img src="images/brand1.svg" width="146" /></div>
                    </label>
                    <label className="control control--radio">
                        <input type="radio" name="radio" />
                        <div className="control__indicator"><img src="images/paparomanos.png" /></div>
                    </label>
                    <label className="control control--radio">
                        <input type="radio" name="radio" />
                        <div className="control__indicator"><img src="images/breadeauxpizza.png" /></div>
                    </label>
                    <label className="control control--radio">
                        <input type="radio" name="radio" />
                        <div className="control__indicator"><img src="images/tomoto.png" /></div>
                    </label>
                </div>
            </div>


        );
    }
}

export default SelectBrand;
