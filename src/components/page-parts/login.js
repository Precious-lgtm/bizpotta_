import React from 'react';
import Logo from '../../images/bizpotta-logo-dark-sm.png';
import { Link } from 'react-router-dom';
import '../../css/registration/signin.css';

function Signin() {
    return(
        <div className = 'signin-main'>
            <div className = 'signin-welcome'>
                <img src = {Logo} alt = 'logo' />
                <p>
                    Bizpotta is a platform that builds global enterpreneurs equipped 
                    and equips them with the skills and capacity neccessary for business
                    success in the 21st century. 
                </p>
                <p>
                    Sign in to access our Services
                </p>
                <Link to = "/"> Visit our Homepage </Link>
            </div>
            <div className = 'signin-details'>
                <h2> SIGN IN </h2>
                <h4> Welcome back, sign in to continue </h4>  
                <form className = 'signin'>
                    <input type = 'email' className = 'email' placeholder = 'Your Email Address' name = 'email' required/>
                    <input type = 'password' className = 'password' placeholder = 'Your Password' name = 'password' required/>
                    <button type = 'submit'> Sign In </button>
                </form>
                <p><Link to = "/signup"> Create New Account </Link>
                <Link to = "/"> Reset Password </Link>
                </p>
            </div>
        </div>
    )
}

export default Signin;