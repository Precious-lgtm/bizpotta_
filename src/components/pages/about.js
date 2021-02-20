import React, {Component} from 'react';
import Header from '../page-parts/header';
import AboutUs from '../page-parts/aboutUs';
import Footer from '../page-parts/footer';

class About extends Component{
    render(){
        return(
            <div>
                <Header />
                <AboutUs />
                <Footer />
            </div>
        )
    }
}

export default About;