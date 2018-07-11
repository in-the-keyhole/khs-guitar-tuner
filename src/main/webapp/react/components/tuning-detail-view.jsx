import React from 'react';
import Sound from 'react-sound';
import PageHeader from './header.jsx';
import Strum from './strum.jsx';
import Tune from './tune.jsx';
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
            notes: '',
            chordPlaying: false
        };
        this.uppercase = this.uppercase.bind( this );
        this.isPlaying = this.isPlaying.bind( this );
        this.newClick = this.newClick.bind( this );
    }

    handleChord() {
        this.setState( { chordPlaying: true } );

    }

    handleFinish() {
        this.setState( { chordPlaying: false } );
    }
    componentWillMount() {
        let currentComponent = this;
        fetch( 'postgresql://ec2-50-19-105-188.compute-1.amazonaws.com:5432/dc7snietmf0at2' )
            .then( results => { return results.json(); } )
            .then( data => {
                let tunings = data._embedded.tunings;
                tunings.forEach(( tuning ) => {
                    let path = '/tunings/' + tuning.id;
                    if ( path === window.location.pathname ) {
                        currentComponent.setState( { desc: tuning.description, notes: tuning.notes } );
                    }
                } );
            } )
            .catch(( error ) => { console.log( error ) } );
    }

    uppercase( note ) {
        if ( note ) {
            return note.toUpperCase();
        }
    }

    isPlaying( note ) {
        return this.state.status === 'PLAYING' && this.state.note === note ? true : false;
    }

    newClick( n ) {
        if ( !this.state.chordPlaying ) {
            this.setState( { note: n, status: this.isPlaying( n ) ? 'STOPPED' : 'PLAYING', } )
        }
    }

    render() {
        var list = this.state.notes.split( ',' );

        var note0 = buildAudio( list[0], '0' );
        var note1 = buildAudio( list[1], '1' );
        var note2 = buildAudio( list[2], '2' );
        var note3 = buildAudio( list[3], '3' );
        var note4 = buildAudio( list[4], '4' );
        var note5 = buildAudio( list[5], '5' );

        return (
            <div className="detail-view">
                <PageHeader title={this.state.desc} />
                <a href="/" class="btn-small blue darken-4 detail-back"><i class="material-icons left">keyboard_backspace</i>back</a>
                <div className="detail-inst">
                    <div className='detail-inst-header'>
                        <h4>{this.state.desc} Guitar Tuning:</h4>
                    </div>
                    <ul>
                        <li>Click on a <em>SINGLE NOTE</em> to hear that note<br />
                            played on a loop. Click it again to stop the loop.</li><br />
                        <li>Click on <em>TUNE</em> for each note to be played<br />
                            five times. Click it again to stop the tuning cycle.</li><br />
                        <li>Click on <em>STRUM</em> to hear the notes<br />
                            played in one strum.</li>
                    </ul>
                </div>

                <Tune list={list} />
                <Strum list={list} isPlaying={() => this.handleChord()} isStopped={() => this.handleFinish()} />
                <Sound url={this.state.note} playStatus={this.state.status} loop={true} playFromPosition={250} />

                <div className="detail-image">
                    <img src={fret} alt="Fret" />
                    <div class="row">
                        <div class="col 4"></div>
                        <div class="col 1 detail-note first-note">
                            <span className="note"
                                style={{ color: this.isPlaying( note0 ) ? '#0d47a1' : 'white' }}
                                onClick={() => this.newClick( note0 )}>
                                {this.uppercase( list[0] )}
                            </span>
                        </div>
                        <div class="col 1 detail-note second-note">
                            <span className="note"
                                style={{ color: this.isPlaying( note1 ) ? '#0d47a1' : 'white' }}
                                onClick={() => this.newClick( note1 )}>
                                {this.uppercase( list[1] )}
                            </span>
                        </div>
                        <div class="col 1 detail-note third-note">
                            <span className="note"
                                style={{ color: this.isPlaying( note2 ) ? '#0d47a1' : 'white' }}
                                onClick={() => this.newClick( note2 )}>
                                {this.uppercase( list[2] )}
                            </span>
                        </div>
                        <div class="col 1 detail-note fourth-note">
                            <span className="note"
                                style={{ color: this.isPlaying( note3 ) ? '#0d47a1' : 'white' }}
                                onClick={() => this.newClick( note3 )}>
                                {this.uppercase( list[3] )}
                            </span>                        </div>
                        <div class="col 1 detail-note fifth-note">
                            <span className="note"
                                style={{ color: this.isPlaying( note4 ) ? '#0d47a1' : 'white' }}
                                onClick={() => this.newClick( note4 )}>
                                {this.uppercase( list[4] )}
                            </span>
                        </div>
                        <div class="col 1 detail-note sixth-note">
                            <span className="note"
                                style={{ color: this.isPlaying( note5 ) ? '#0d47a1' : 'white' }}
                                onClick={() => this.newClick( note5 )}>
                                {this.uppercase( list[5] )}
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