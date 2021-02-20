import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import "../../css/frontpage/slideshow.css";
import image1 from "../../images/home-hero-bg.jpg";
import image2 from "../../images/home-hero-2-bg.jpg";
import image3 from "../../images/home-hero-3-bg.jpg";
import image4 from "../../images/home-hero-4-bg.jpg";
import image5 from "../../images/home-hero-5-bg.jpg";

function Slideshow(){
    return(
        <div className = 'slide-container'>
            <Slide duration = {5000} arrows = {false} indicators = {false}>
                <div className = 'each-fade' style = {{'background': `linear-gradient(to right, rgba(2, 2, 1, 0.8), rgba(2, 1, 2, 0.8)), url(${image1}) no-repeat`}}>
                    <h4>Welcome to</h4>
                    <h1>Bizpotta</h1>
                    <h5>Building global enterpreneurs equipped with 
                        the skills and capacity for business success
                    </h5>
                    <Link to = "/"> Get Started </Link>
                </div>
                <div className = 'each-fade' style = {{'background': `linear-gradient(to right, rgba(2, 2, 1, 0.8), rgba(2, 1, 2, 0.8)), url(${image2}) no-repeat`}}>
                    <h4>Enjoy</h4>
                    <h1>Bizpotta Learning</h1>
                    <h5>Experience exciting business education with 
                        world class resources and faculty at your doorstep.
                    </h5>
                    <Link to = "/"> Create an Account </Link>
                </div>
                <div className = 'each-fade' style = {{'background': `linear-gradient(to right, rgba(2, 2, 1, 0.8), rgba(2, 1, 2, 0.8)), url(${image4}) no-repeat`}}>
                    <h4>Experience</h4>
                    <h1>Bizpotta Hub</h1>
                    <h5>Everything you need for your business development 
                        and business management.
                    </h5>
                    <Link to = "/"> Get Started </Link>
                </div>
                <div className = 'each-fade' style = {{'background': `linear-gradient(to right, rgba(2, 2, 1, 0.8), rgba(2, 1, 2, 0.8)), url(${image5}) no-repeat`}}> 
                    <h4>Profit from</h4>
                    <h1>Bizpotta Funds</h1>
                    <h5>Don’t let funds stop your business dreams! 
                        Access finances from willing investors!
                    </h5>
                    <Link to = '/login'> Signin </Link>
                </div>
                <div className = 'each-fade' style = {{'background': `linear-gradient(to right, rgba(2, 2, 1, 0.8), rgba(2, 1, 2, 0.8)), url(${image3}) no-repeat`}}>
                    <h4>Join the</h4>
                    <h1>Bizpotta Community</h1>
                    <h5>The perfect place to build partnerships and opportunities for business success. 
                    </h5>
                    <Link to = "/"> Let's go there </Link>
                </div>
            </ Slide>
        </div>
    )
}

export default Slideshow;