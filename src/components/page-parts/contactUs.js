import React from 'react';
import '../../css/frontpage/contact.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
//import Logo from '../../images/bizpotta-logo-dark-sm.png';

function contactUs(){
    return(
        <div className = 'contact-main'>
            <div className = 'contact-welcome'>
                <h2> Get in touch with us </h2>
                <p>
                    We'd love to hear from you. Contact us 
                    and ask any question about our services
                </p>
            </div>
            <div className = 'contact-details'>
                <div className = 'contact-location'>
                    <div>
                        <i className = 'fa fa-map-marker'></i>
                        <p>#3 Downing Street, Buckingham Palace, London </p>
                    </div>
                    <div>
                        <i className = 'fa fa-phone'></i>
                        <p> +234 814 756 8723 </p>
                    </div>
                    <div>
                        <i className = 'fa fa-envelope'></i>
                        <p> bizpotta@gmail.com </p>
                    </div>
                </div>
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