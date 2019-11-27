import React from 'react'

export default function Footer() {
    return (
        <div className = "footer">
            <div className="footer-container">
            <div className="account-container">
                <div className="maintag">My Account</div>
                <div className="footer-item">Login</div>
                <div className="footer-item">Register</div>
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
                <div className="footer-item">About Us</div>
                <div className="footer-item">Job Opportunities</div>
                <div className="footer-item">Customer Service</div>
            </div>
            </div>
            <div className="under-part">
            <p className="under-text">©2019 Petite Damsel. Made by Yehor Lapko. </p>
            </div>
        </div>
    )
}
