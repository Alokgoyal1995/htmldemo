import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import axios from 'axios';

function validateInput(data){
    let errors = {};
    if(Validator.isEmpty(data.newpassword)) {
      errors.newpassword = 'This field is required';
    }

    if(Validator.isEmpty(data.confirmpassword)) {
        errors.confirmpassword = 'This field is required';
      }
    if(data.newpassword != data.confirmpassword){
        errors.matchpass = 'newpassword and confirmpassword not match';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            newpassword: '',
            confirmpassword: '',
            otp : '',
            errors: {},
            isLoading: false
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
            this.setState({ errors: {}, isLoading: true});
            
            let OtpPayload={
                "otp": {
                    "country_code": "+91",
                    "mobile": this.props.location.state.mobile,
                    "code": this.props.location.state.otp,
                    "password":this.state.newpassword
               }
           };          
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
            (res) => this.context.router.history.push('/'),
            (err) =>{ 
                console.log("===",err.response.data.otp);
                this.setState({ errors: err.response.data, isLoading: false})
            }
          )
         
        }
    }
    
    
  render() {
    const { errors, newpassword,confirmpassword, isLoading} = this.state;
   // console.log(errors);

    return (
        <section>
           <div className="container">
           
            <div className="login-area">
                <div className="login-box">
                  
                    <h1>TableArt<br/> Enterprise Platform</h1>
                    <h6>OTP Verified. Create new password</h6>
                    <div className="login-form">
                        <form className="form-card" onSubmit={this.submitHandler}>
                        <fieldset className="form-fieldset">
                        
                        { errors.err && <div className="text-red">{errors.err}</div> }
                        <span className="text-red error-size">{errors.matchpass}</span>
                            <div className="form-element form-input">
                                <input id="newpassword" className="form-element-field" placeholder="Please enter your new password" type="password" name="newpassword" onChange={this.changeHandler}/>
                                <div className="form-element-bar"></div>
                                <label className="form-element-label" >New Password</label>
                                <span className="text-red error-size">{errors.newpassword}</span>
                            </div>
                            <div className="form-element form-input">
                                <input id="confirmpassword" className="form-element-field" placeholder="Please enter your confirm password" type="password" name="confirmpassword" onChange={this.changeHandler}/>
                                <div className="form-element-bar"></div>
                                <label className="form-element-label" >Confirm Password</label>
                                <span className="text-red error-size">{errors.confirmpassword}</span>
                            </div>
                            
                        </fieldset>

                        <div className="login-btn-area">
                        <button type="submit" className="btn btn-primary ">REST PASSWORD</button>
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
ChangePassword.contextTypes = {
    router: PropTypes.object.isRequired
  }
export default ChangePassword;
