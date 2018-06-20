import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TuningsView from './tunings-view.jsx';
import AboutView from './about-view.jsx';
import PageDetailView from './tuning-detail-view.jsx';

class Error extends React.Component{
    render(){return <h1>Error: path doesnt exist</h1>;}
}

class Navigation extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={TuningsView} />
                    <Route path='/index' component={TuningsView} />
                    <Route path='/about' component={AboutView} />
                    <Route path='/' component={PageDetailView} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation;