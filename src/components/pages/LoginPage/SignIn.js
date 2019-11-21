import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import CustomButton from '../../misc/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../../redux/user/user-actions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;    
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className="login-form sign-in">
                <h2 className="title">I already have an account</h2>
                <form className="main-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        label="email"
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        label="password"
                        required 
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>       
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);


