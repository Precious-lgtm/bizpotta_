import React, {Component} from 'react';
import Header from '../page-parts/header';
import Footer from '../page-parts/footer';
import ContactUS from '../page-parts/contactUs';

class Contact extends Component{
    render(){
        return(
            <div>
                <Header />
                <ContactUS />
                <Footer />
            </div>
        )
    }
}

export default Contact;