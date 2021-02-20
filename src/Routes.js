import React, {Component} from 'react';
import Home from './components/primary/home';
import About from './components/primary/about';
import Contact from './components/primary/contact';
import Resources from './components/primary/resources';
import Blog from './components/primary/blog';
import Signup from './components/primary/signup';
import Signin from './components/primary/signin';
import {Route, BrowserRouter as Router} from 'react-router-dom';

//import reportWebVitals from './reportWebVitals';

class Routes extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/about" component={About} />
                    <Route exact path = "/contact" component={Contact} />
                    <Route exact path = "/resources" component={Resources} />
                    <Route exact path = "/blog" component={Blog} />
                    <Route exact path = "/signup" component={Signup} />
                    <Route exact path = "/signin" component={Signin} />
                </div>
            </Router>
        )
    }
}

export default Routes;
