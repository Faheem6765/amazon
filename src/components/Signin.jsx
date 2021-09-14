import React from 'react'
import { Link } from 'react-router-dom';
import "../css/signin.css"
import logo from '../images/amazoneLogo.png';

function Signin() {
    return (
        <>
            <div className="logo-container">
                <div className="signin-logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="inner-container">
                <div className="inner shadow-lg">
                    <p className="signin-text">Sign-In</p>
                    <input type="text" name="" id="phone" />
                    {/* <Link to="/"> */}
                    <button style={{ width: "100%" }} className="btn btn-warning">Continue</button>
                    {/* </Link> */}
                    <p className="terms-text">By continuing, you agree to Amazon's <span> Condition's of use</span> and
                        <span> Privacy Notice</span>
                    </p>
                    <p className="need-help">Need Help?</p>
                </div>
            </div>
            <div className="bottom-content">
                <hr />
                <p>New To Amazon?</p> <hr />
            </div>
            <div className="button">
                <button className="btn-lg">Create your Amazon Account</button>
            </div>
        </>
    )
}

export default Signin
