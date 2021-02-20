import React from 'react';
import '../../css/about/about.css';

function About() {
    return(
        <div className = 'aboutus-main'>
            <div className = 'aboutus-header'>
                <h1> About Us </h1>
                <h4> Learn about us, our philosophy, aims, objectives and 
                    how you can be an integral part of it.
                </h4>
            </div>
            <div className = 'aboutus-details'>
                <div className = 'about-phil'>
                    <h2>Vision</h2>
                    <p>
                        An integrated business solutions portal building 
                        profitable and sustainable businesses. 
                    </p>
                </div>
                <div className = 'about-phil'>
                    <h2>Mission</h2>
                    <p>
                        To build successful businesses through knowledge 
                        acquisition, management and technological support 
                        as well as funding opportunities 
                    </p>
                </div>
                <div className = 'about-phil'>
                    <h2> Core Values </h2>
                    <p>
                        Trust, Innovation, Excellence, Service to others, 
                        Simplicity (TIESS)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;