import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TuningsView from './tunings-view.jsx';
import AboutView from './about-view.jsx';
import PageDetailView from './tuning-detail-view.jsx';

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={TuningsView} />
                    <Route path='/about' component={AboutView} />
                    <Route path='/tunings/' component={PageDetailView} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation;