import React from 'react';
import Logo from "../../images/bizpotta-logo-dark.png";
import {Link} from 'react-router-dom';
import '../../css/frontpage/header.css';

function Header(){
    return(
        <div className = 'container'>
                <div className = 'logo'>
                    <Link to = '/'><img src = {Logo} alt = 'Logo' /></Link>
                </div>
                <div className = 'basic-menu'>
                    <ul>
                        <li><Link to = '/about'> About </Link></li>
                        <li><Link to = '/resource/bizlearning'> Learning </Link></li>
                        <li><Link to = '/resources'> Hub </Link></li>
                        <li><Link to = '/resources'> Funds </Link></li>
                        <li><Link to = '/resources'> Community </Link></li>
                        <li><Link to = '/contact'> Contact Us </Link></li>
                    </ul>
                    <ul className = 'menu-2'>
                        <li><Link to = '/signin' name = 'login'> Sign In </Link></li>
                        <li><Link to = '/signup' name = 'register'> Sign Up </Link></li>
                    </ul>
                </div>
        </div>
    )
}

export default Header;