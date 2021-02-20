import React from 'react';
import Logo from '../../images/bizpotta-logo-dark-sm.png';
import { Link } from 'react-router-dom';
import '../../css/registration/signin.css';

function Register() {
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
                    Create an account with us to begin
                </p>
                <Link to = "/"> Visit our Homepage </Link>
            </div>
            <div className = 'signin-details'>
                <h2> SIGN UP </h2>
                <h4> Create an account to get started </h4>
                <form className = 'signin'>
                    <input type = 'text' className = 'Fullname' placeholder = 'Full Name' name = 'fullname' required/>
                    <input type = 'text' className = 'username' placeholder = 'Username' name = 'username' required/>
                    <input type = 'email' className = 'email' placeholder = 'Email Address' name = 'email' required/>
                    <input type = 'password' className = 'password' placeholder = 'Password' name = 'password' required/>
                    <input type = 'text' className = 'refer' placeholder = 'Referral' name = 'referral' />
                    <button type = 'submit'> Sign Up </button>
                </form>
                <p><Link to = "/signin"> Login to Existing Account </Link>
                </p>
            </div>
        </div>
    )
}

export default Register;