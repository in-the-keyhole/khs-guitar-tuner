import React from 'react';
import PageHeader from './header.jsx';

class AboutView extends React.Component{
    render(){
        return(
            <div>
                <div data-role="header">
                    <PageHeader title='Keyhole Software' />
                    <a href="index" data-transition="slide" data-role="button" data-theme="d" data-icon="arrow-l" >Back</a>
                </div>
                <div data-role="content">
                    <h1>React Guitar Tuner Application</h1>
                    <p>
                    <label>Built by <a href="//www.keyholesoftware.com">Keyhole Software</a> using React components.</label>
                    </p>
                    <label>Select a listed guitar tuning, audio for each note in the tuning can be played.</label>
                </div>
            </div>
        );
    }
}

export default AboutView;