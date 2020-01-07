import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOutStart } from '../../redux/user/user-actions';
import { selectCurrentUser } from '../../redux/user/user-selectors';

const Footer = ({ currentUser }) => {
    return (
        <div className = "footer">
            <div className="footer-container">
            <div className="account-container">
                <div className="maintag">My Account</div>
                <div className="footer-item">
                    {   
                        currentUser ?
                        <div className="nav-option" onClick={signOutStart}>sign out</div>
                        :
                        <Link className="nav-option" to="/login">log in</Link>
                    }
                </div>
            </div>

            <div className="subscribe-container">
                <div className="sub-text">
                <p>Get all of our news, promotions and exclusive perks directly in your inbox!</p>
                </div>
                <div className="form-container">
                    <form className="form-inline" action="">
                    <input type="email" id="email" placeholder="Enter email" name="email"/>
                    <a className="btn submit" href='/'>Submit</a>
                    </form>
                </div>       
            </div>

            <div className="about-container">
                <div className="maintag">Our name:</div>
                <div className="footer-item">About This Website</div>
                <div className="footer-item">More</div>
            </div>
            </div>
            <div className="under-part">
            <p className="under-text">©2020 Petite Mamsell. Made by Yehor Lapko. </p>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Footer);

