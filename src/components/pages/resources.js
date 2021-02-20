import React, {Component} from 'react';
import Header from '../page-parts/header';
import Footer from '../page-parts/footer';
import Resource from '../page-parts/resource';

class Resources extends Component{
    render(){
        return(
            <div>
                <Header />
                <Resource />
                <Footer />
            </div>
        )
    }
}

export default Resources;