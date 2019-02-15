import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
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

    if(Validator.isEmpty(data.otp)) {
        errors.otp = 'This field is required';
      }
 
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

class Otp extends Component {

    constructor(props){
        super(props);
        this.state = {
            identifier: '',
            otp : '',
            redirect: false,
            errors: {},
            isLoading: false,
            er : ''
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
            this.setState({redirect:false, errors: {}, isLoading: true});
           
            let OtpPayload={
                "otp": {
                 "country_code": "+91",
                 "mobile": this.state.identifier,
                 "code":this.state.otp
               }
           }
           let axiosConfig = {
            headers: {
                "X-Api-Key" :"p4ugoi0TKO5YZq9QwJ3ev5littgb08H71QlCyCIX",
                "Content-Type" : "application/json",
                "Accept" : "application/json",
                "x-brand-id" : "1517a719-01d8-4d06-86ca-a3213fb0b9a5"
            }
          };
          
          axios.post('https://f21l49ma30.execute-api.us-west-2.amazonaws.com/dev/v1/adminconsole/otp/verify', OtpPayload, axiosConfig)
          .then(
            (res) => this.context.router.history.push({pathname:"/changepassword",
            state:{
                otp:this.state.otp,
                mobile:this.state.identifier
            }
            }),
            
            (err) =>{ 
                console.log("===",err.response.data.otp);
                this.setState({ er: err.response.data.otp.mobile, isLoading: false});
                this.setState({ er: err.response.data.otp.code, isLoading: false});
            }
          )
        
        }
    }

   

  render() {
    const {er, errors, identifier, otp, isLoading} = this.state;
   
   
    return (
        <section>
            <div className="container">
                <div className="login-area">
                    <div className="login-box">
                        <h1>TableArt<br/> Enterprise Platform</h1>
                        <h6>Enter your phone number to receive OTP</h6>
                        <div className="login-form">
                        <form className="form-card" onSubmit={this.submitHandler}>
                        <fieldset className="form-fieldset">
                        <div className="text-red">{this.state.er}</div>
                        <div className="form-element form-input">
                            <input id="Phone" className="form-element-field" placeholder="Please enter your phone number" type="text" name="identifier" onChange={this.changeHandler} />
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" >Phone Number</label>
                            <span className="text-red error-size">{errors.identifier}</span>
                        </div>
                        <div className="form-element form-input">
                            <input id="Otp" className="form-element-field" placeholder="Please enter your otp" type="text" name="otp" onChange={this.changeHandler} />
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" >OTP</label>
                            <span className="text-red error-size">{errors.otp}</span>
                        </div>
                        <div className="recieve-code">Didn’t receive code? <a href="#">Resend Code</a></div>
                     </fieldset>

                    <div className="login-btn-area">
                    <button type="submit" className="btn btn-primary ">VERIFY CODE</button>
                    </div>
                    </form>
                                </div>
                            </div>
                            </div>    

                        
                    </div>   
                <div className="login-bg login-bg3">
                </div>
        </section> 
            
    );
  }
} 
Otp.contextTypes = {
    router: PropTypes.object.isRequired
  }
export default Otp;
 