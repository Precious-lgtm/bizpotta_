import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/frontpage/footer.css";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

function Footer(){
    return(
            <div className = 'footer-details'>
                <ul>
                    <li><h2 style = {{'fontWeight': 'bold'}}> BIZPOTTA </h2></li>
                    <li><div className = 'stripes'></div></li>
                    <li><p>
                            © Copyright 2021 BizPotta. 
                        </p>
                        <p>
                            All Rights Reserved
                        </p>
                        <p>
                            <i className = 'fa fa-twitter'></i>
                            <i className = 'fa fa-facebook-square'></i>
                            <i className = 'fa fa-instagram'></i>
                            <i className = 'fa fa-whatsapp'></i>
                        </p>
                    </li>
                </ul>
                <ul>
                    <li><h2> Newsletter </h2></li>
                    <li><div className = 'stripes'></div></li>
                    <li><h4> Subscribe to our news letter to get exclusive offers, news, tips. </h4></li>
                    <li>
                        <form>
                            <input type = 'email' placeholder = 'Enter your email' name = 'email' required/>
                            <button type = 'submit'><i className = 'fa fa-send-o' style = {{'color': '#12104E'}}></i></button>
                        </form>
                    </li>
                </ul>
                <ul>
                    <li><h2> Helpful Links </h2></li>
                    <li><div className = 'stripes'></div></li>
                    <li>
                        <Link to = "/"> Home </Link>
                        <Link to = "/about"> About Bizpotta </Link>
                        <Link to = "/contact"> Contact Us </Link>    
                        <Link to = "/resources"> Resources </Link>
                        <Link to = "/"> Toolkit </Link>
                        <Link to = "/"> Blog </Link>
                    </li>
                </ul>
                <ul>
                    <li><h2>Privacy</h2></li>
                    <li><div className = 'stripes'></div></li>
                    <li><Link to = ""> Terms of Privacy </Link></li>
                    <li><Link to = ""> Privacy Policy </Link></li>
                    <li><Link to = ""> Report Abuse </Link></li>
                </ul>
            </div>
    );
}

export default Footer;