import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import axios from 'axios';

function validateInput(data){
    let errors = {};
    if(Validator.isEmpty(data.identifier)) {
      errors.identifier = 'This field is required';
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

class PhoneNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            identifier: '',
            errors: {},
            isLoading: false,
            er : '',
            };
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    isValid(){

        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
          this.setState({ errors });
        }

        return isValid;
    }
    changeHandler(e){
        //console.log(e.target.value);

        this.setState({[e.target.name]: e.target.value});

    }

    submitHandler(e){
        e.preventDefault();
        if (this.isValid()) {
            this.setState({er:'', errors: {}, isLoading: true});
            this.props.sendOtp(this.state.identifier)
        //     let OtpPayload={
        //         "otp": {
        //          "country_code": "+91",
        //          "mobile": this.state.identifier
        //        }
        //    }
        //    let axiosConfig = {
        //     headers: {
        //         "X-Api-Key" :"p4ugoi0TKO5YZq9QwJ3ev5littgb08H71QlCyCIX",
        //         "Content-Type" : "application/json",
        //         "Accept" : "application/json",
        //         "x-brand-id" : "1517a719-01d8-4d06-86ca-a3213fb0b9a5"
        //     }
        //   };

        //   axios.post('https://f21l49ma30.execute-api.us-west-2.amazonaws.com/dev/v1/adminconsole/otp/new', OtpPayload, axiosConfig)
        //   .then(
        //     (res) => this.context.router.history.push('/otp'),
        //     (err) => this.setState({ er: err.response.data.otp.mobile, isLoading: false})

        //   )

        }
    }


  render() {
    const { er, errors, identifier, isLoading} = this.state;

    return (
       <section>
        <div className="container">
            <div className="login-area">
                <div className="login-box">
                    <h1>TableArt<br /> Enterprise Platform</h1>
                    <h6>Enter your phone number to receive OTP</h6>
                    <div className="login-form">
                        <form className="form-card" onSubmit={this.submitHandler}>

                        <fieldset className="form-fieldset">
                       <div className="text-red">{er}</div>
                            <div className="form-element form-input">
                                <input id="Phone" className="form-element-field" name="identifier" pattern="[0-9]*" placeholder="Please enter your phone number" type="text" onChange={this.changeHandler}/>
                                <div className="form-element-bar"></div>
                                <label className="form-element-label" >Phone Number</label>
                                <span className="text-red error-size">{errors.identifier}</span>
                            </div>

                        </fieldset>
                        <div className="login-btn-area">
                            {/* <Link to="Otp" className="btn btn-primary ">SEND CODE</Link> */}
                            <button className="btn btn-primary">SEND CODE</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            <div className="login-bg login-bg2">
          </div>

        </section>

    );
  }
}

PhoneNumber.contextTypes = {
    router: PropTypes.object.isRequired
  }


export default PhoneNumber;

