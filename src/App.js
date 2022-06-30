import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 

import Consulting from "./pages/Consulting";

// Elements import Here 

import Elements from "./elements/elements/Elements";
import Button from "./elements/button/Button";
import Service from "./elements/service/Service";
import CounterUp from "./elements/counterup/CounterUp";
import Progressbar from "./elements/progressbar/Progressbar";

import Gallery from "./elements/gallery/Gallery";



// Import Css Here 
import './assets/scss/style.scss';


const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>

                    <Route path={`${process.env.PUBLIC_URL + "/consulting"}`} exact component={Consulting}/>

                    {/* Gallery  */}

                    <Route path={`${process.env.PUBLIC_URL + "/elements"}`} exact component={Elements}/>
                    <Route path={`${process.env.PUBLIC_URL + "/call-to-action"}`} exact component={CalltoAction}/>
                    <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} exact component={Gallery}/>
                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>

                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
