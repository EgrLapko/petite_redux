import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import CustomButton from '../../misc/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../../redux/user/user-actions';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [ userCredentials, setCredentials ] = useState({
         email: '',
         password: '' 
    });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
       

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { name, value } = event.target;
 
        setCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <div className="login-form sign-in">
            <h2 className="title">I already have an account</h2>
            <form className="main-form" onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    label="email"
                    required 
                    handleChange={handleChange}
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    label="password"
                    required 
                    handleChange={handleChange}
                />
                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign in with Google</CustomButton>
                </div>       
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);


