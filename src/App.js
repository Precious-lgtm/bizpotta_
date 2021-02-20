import React, {Component} from 'react';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Resources from './components/pages/resources';
import Signup from './components/pages/signup';
import Signin from './components/pages/signin';
import Bizlearning from './components/sub-parts/bizlearning-institute';
import Bizcert from './components/sub-parts/bizpotta-certification';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" exact component = {Home} />
                <Route path = "/about" exact component = {About} />
                <Route path = "/contact" exact component = {Contact} />
                <Route path = "/resources" exact component = {Resources} />
                <Route path = "/signin" exact component = {Signin} />
                <Route path = "/signup" exact component = {Signup} />
                <Route path = '/resource/bizlearning' exact component = {Bizlearning} />
                <Route path = '/resource/bizcert' exact component = {Bizcert} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
