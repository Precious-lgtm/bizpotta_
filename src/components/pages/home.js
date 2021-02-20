import React, {Component} from 'react';
import Header from '../page-parts/header.js';
import Slideshow from '../page-parts/slideshow';
import AboutMini from '../page-parts/aboutmini';
import Features from '../page-parts/features';
import Footer from '../page-parts/footer';
import '../../css/general.css';


class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <Slideshow />
                <AboutMini />
                <Features />
                <Footer />
            </div>
        )
    }
}

export default Home;