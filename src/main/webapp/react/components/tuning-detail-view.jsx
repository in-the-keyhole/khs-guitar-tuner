import React from 'react';
import Sound from 'react-sound';
import PageHeader from './header.jsx';
import Chord from './chord.jsx';
import fret from "../fret2.jpg";
import '../css/materialize.min.css';
import '../css/index.css';

class PageDetailView extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            note: null,
            status: 'PLAYING',
            desc: '',
            notes: ''
        };
        this.uppercase = this.uppercase.bind(this);
        this.isPlaying = this.isPlaying.bind(this);
    }
    
    componentWillMount() {
        let currentComponent = this;
        fetch( 'http://localhost:8765/tunings' )
            .then( results => { return results.json(); } )
            .then( data => {
                let tunings = data._embedded.tunings;
                tunings.forEach( (tuning) => {
                    let path = '/tunings/' + tuning.id;
                    if ( path === window.location.pathname ) {
                        currentComponent.setState( { desc: tuning.description, notes: tuning.notes } );
                    }
                } );
            } )
            .catch(( error ) => { console.log( error ) } );
    }

    uppercase(note){
        if(note){
            return note.toUpperCase();
        }
    }
    
    isPlaying(note){
        return this.state.status === 'PLAYING' && this.state.note === note ? true : false;
    }
    
    render() {
        var list = this.state.notes.split( ',' );

        var note0 = buildAudio(list[0], '0');
        var note1 = buildAudio(list[1], '1');
        var note2 = buildAudio(list[2], '2');
        var note3 = buildAudio(list[3], '3');
        var note4 = buildAudio(list[4], '4');
        var note5 = buildAudio(list[5], '5');

        return (
            <div className="detail-view">
                <PageHeader title={this.state.desc} />
                <a href="/" class="btn-small blue darken-4 detail-back"><i class="material-icons left">keyboard_backspace</i>back</a>
                <div className="detail-inst">
                    <h4>{this.state.desc} Guitar Tuning:</h4>
                    <ul>
                        <li>Click on a single note to hear that note<br />
                            played on a loop. Click it again to stop the loop.</li><br />
                        <li>Click on 'Play' to hear the notes<br />
                            played in one strum.</li>
                    </ul>
                </div>

                <Chord list={list} />
                <Sound url={this.state.note} playStatus={this.state.status} loop={true} playFromPosition={250} />

                <div className="detail-image">
                    <img src={fret} alt="Fret" />
                    <div class="row">
                        <div class="col 4"></div>
                        <div class="col 1 detail-note first-note">
                            <span className="note" 
                                style={{ color: this.isPlaying(note0) ? '#0d47a1' : 'white' }} 
                                onClick={() => this.setState( {
                                    note: note0,
                                    status: this.isPlaying(note0) ? 'STOPPED' : 'PLAYING',
                                } )}>
                                {this.uppercase(list[0])}
                            </span>
                        </div>
                        <div class="col 1 detail-note second-note">
                            <span className="note"
                                style={{ color: this.isPlaying(note1) ? '#0d47a1' : 'white' }}
                                onClick={() => this.setState( {
                                    note: note1,
                                    status: this.isPlaying(note1) ? 'STOPPED' : 'PLAYING',
                                } )}>
                                {this.uppercase(list[1])}
                            </span>
                        </div>
                        <div class="col 1 detail-note third-note">
                            <span className="note"
                                style={{ color: this.isPlaying(note2) ? '#0d47a1' : 'white' }}
                                onClick={() => this.setState( {
                                    note: note2,
                                    status: this.isPlaying(note2) ? 'STOPPED' : 'PLAYING',
                                } )}>
                                {this.uppercase(list[2])}
                            </span>
                        </div>
                        <div class="col 1 detail-note fourth-note">
                            <span className="note"
                                style={{ color: this.isPlaying(note3) ? '#0d47a1' : 'white' }}
                                onClick={() => this.setState( {
                                    note: note3,
                                    status: this.isPlaying(note3) ? 'STOPPED' : 'PLAYING',
                                } )}>
                                {this.uppercase(list[3])}
                            </span>                        </div>
                        <div class="col 1 detail-note fifth-note">
                            <span className="note"
                                style={{ color: this.isPlaying(note4) ? '#0d47a1' : 'white' }}
                                onClick={() => this.setState( {
                                    note: note4,
                                    status: this.isPlaying(note4) ? 'STOPPED' : 'PLAYING',
                                } )}>
                                {this.uppercase(list[4])}
                            </span>
                        </div>
                        <div class="col 1 detail-note sixth-note">
                            <span className="note"
                                style={{ color: this.isPlaying(note5) ? '#0d47a1' : 'white' }}
                                onClick={() => this.setState( {
                                    note: note5,
                                    status: this.isPlaying(note5) ? 'STOPPED' : 'PLAYING',
                                } )}>
                                {this.uppercase(list[5])}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function buildAudio( note, index ) {
    var sharp = "";
    if ( note && note.indexOf( "#" ) >= 0 ) {
        sharp = "-sharp";
        note = note.replace( "#", "" );
    }
    return "/audio/" + note + sharp + "-" + index + ".mp3";
}

export default PageDetailView;