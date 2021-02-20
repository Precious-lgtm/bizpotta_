import React from 'react';
import '../../css/frontpage/contact.css';
import { Link } from 'react-router-dom';
//import Logo from '../../images/bizpotta-logo-dark-sm.png';

function contactUs(){
    return(
        <div className = 'contact-main'>
            <div className = 'contact-welcome'>
                <p>
                    At Bizpotta, we value your feedback, 
                    your suggestions, your criticism and 
                    your user experience in all. Whatever 
                    enquiries you might want to make, or 
                    requests you desire to be met with regards to 
                    the businesses we offer. Use this platform to let us know. 
                </p>
                <p>
                    In essence, Let us hear from you.
                </p>
                <Link to = "/resources"> Our Services </Link>
            </div>
            <div className = 'contact-details'>
                <form className = 'contact-form'>
                    <input type = 'text' className = 'fullname' placeholder = 'Enter Your Full name' name = 'fullname' required/>
                    <input type = 'email' className = 'email' placeholder = 'Enter Your Email Address' name = 'email' required/>
                    <textarea type = 'text' className = 'message' placeholder = "Your message details" name = 'msg' required />
                    <button type = 'submit'> Send a Message </button>
                </form>
            </div>
        </div>
    )
}

export default contactUs;