import React from 'react';
import PageHeader from './header.jsx';
import '../css/index.css';
import '../css/materialize.min.css';

class AboutView extends React.Component{
    render(){
        return(
            <div className="about-view">
                <div>
                    <PageHeader title='Keyhole Software' />
                <a href="/" class="btn-small blue darken-4 about-back"><i class="material-icons left">keyboard_backspace</i>back</a>

                </div>
                <div className="about-body">
                    <h3>React Guitar Tuner Application</h3>
                    <p>
                        <label className="about-label">Built by <a href="//www.keyholesoftware.com">Keyhole Software</a> using React components.</label>
                    </p>
                    <label className="about-label">Select a listed guitar tuning, audio for each note in the tuning can be played.</label>
                </div>
            </div>
        );
    }
}

export default AboutView;