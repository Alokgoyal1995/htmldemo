import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { login } from '../../appRedux/actions/authActions';

function validateInput(data){
    let errors = {};
    if(Validator.isEmpty(data.identifier)) {
      errors.identifier = 'This field is required';
    }
    if(Validator.isEmpty(data.password)) {
      errors.password = 'This field is required';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            identifier: '',
            password: '',
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
            this.setState({[e.target.name]: e.target.value});

    }

    submitHandler(e){
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true});
            this.props.login(this.state).then(
                (res) => this.context.router.history.push('/dashboard'),
                (err) => this.setState({ errors: err.response.data, isLoading: false})
            )
        }

    }

  render() {
    const { errors, identifier, password, isLoading} = this.state;

    const {auth}=this.props;
    if(auth.isAuthenticated) {
        // console.log("Test");
        this.context.router.history.push('/dashboard');
      }

    return (
        <section>
            <div className="container">

                <div className="login-area">
                    <div className="login-box">
                        <h3>Welcome</h3>
                        <h1>TableArt<br/> Enterprise Platform </h1>
                        <div className="login-form">
                            <form className="form-card" onSubmit={this.submitHandler}>
                            <fieldset className="form-fieldset">
                            { errors.err && <div className="text-red">{errors.err}</div> }
                                <div className="form-element form-input">
                                    <input id="Email" className="form-element-field" name="identifier" placeholder="Please enter your email" type="text" onChange={this.changeHandler} />
                                    <div className="form-element-bar"></div>
                                    <label className="form-element-label" htmlFor="Email">Username</label>
                                    <span className="text-red error-size">{errors.identifier}</span>
                                </div>

                                <div className="form-element form-input">
                                    <input id="Password" className="form-element-field" name="password" placeholder="Please enter your password" type="password" onChange={this.changeHandler} />
                                    <div className="form-element-bar"></div>
                                    <label className="form-element-label" htmlFor="Password">Password</label>
                                    <span className="text-red error-size">{errors.password}</span>
                                </div>

                            </fieldset>
                        <div className="forgot-password"> <Link to="/Phonenumber" >Forgot Password?</Link></div>
                        <div className="login-btn-area">
                        <button className="btn btn-primary login-btn">Login</button>
                        </div>
                        </form>
                        </div>
                    </div>
                    </div>

            </div>

                <div className="login-bg">

                </div>
            </section>

    );
  }
}
Login.propTypes = {
    login: PropTypes.func.isRequired
  }

  Login.contextTypes = {
    router: PropTypes.object.isRequired
  }
function mapStateToProps(state) {
    return {
      auth: state.auth
    };
}
export default connect(mapStateToProps, { login }) (Login);
