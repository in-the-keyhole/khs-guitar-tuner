import React from 'react';
import Sound from 'react-sound';
import PageHeader from './header.jsx';
import Chord from './chord.jsx';
import fret from "../fret2.jpg";
import '../css/materialize.min.css';

const TUNINGS = [
    {id: 1001, description: 'Standard', notes: 'e, a, d, g, b, e'},
    {id: 1002, description: 'DROP D', notes: 'd, a, d, g, b, e'},
    {id: 1003, description: 'DADGAD', notes: 'd, a, d, g, a, d'},
    {id: 1004, description: 'Half Step Down', notes: 'd#, g#, c#, f#, a#, d#'},
    {id: 1005, description: 'Whole Step Down', notes: 'd, g, c, f, a, d'},
    {id: 1006, description: 'OPEN C', notes: 'c, g, c, g, c, e'},
    {id: 1007, description: 'OPEN D', notes: 'd, a, d, f#, a, d'},
    {id: 1008, description: 'OPEN G', notes: 'd, g, d, g, b, d'}
];

class PageDetailView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            note: null,
            status: 'PLAYING',
        };
    }
    render(){
        let desc, notes;
        TUNINGS.forEach((tuning) =>{
            const path = '/' + tuning.id;
            if(path === this.props.location.pathname){
                desc = tuning.description;
                notes = tuning.notes;
            }
        });
        
        let list = notes.split(", ");
        
        return(
            <div className="detail-view">
                <PageHeader title={desc} />
                <a href="index" class="btn-small teal accent-4 detail-back"><i class="material-icons left">keyboard_backspace</i>back</a>
                
                <Chord list={list}/>
                <Sound url={this.state.note} playStatus={this.state.status} loop={true} playFromPosition={250}/>
                
                <div className="detail-image">
                    <img src={fret} alt="Fret"/>
                    <div class="row">
                        <div class="col 4"></div>
                        <div class="col 1 detail-note first-note">
                            <span className="note"
                                style={{ color: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[0], '0') ? 'green' : 'white'  }}
                                onClick={ () => this.setState({
                                    note: buildAudio(list[0], '0'),
                                    status: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[0], '0') ? 'STOPPED' : 'PLAYING',
                                })}>
                                {list[0].toUpperCase()}
                            </span>
                        </div>
                        <div class="col 1 detail-note second-note">
                            <span className="note" 
                                style={{ color: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[1], '1') ? 'green' : 'white'  }}
                                onClick={ () => this.setState({
                                    note: buildAudio(list[1], '1'),
                                    status: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[1], '1') ? 'STOPPED' : 'PLAYING',
                                })}>
                                {list[1].toUpperCase()}
                            </span>
                        </div>
                        <div class="col 1 detail-note third-note">
                            <span className="note" 
                                style={{ color: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[2], '2') ? 'green' : 'white'  }}
                                onClick={ () => this.setState({
                                    note: buildAudio(list[2], '2'),
                                    status: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[2], '2') ? 'STOPPED' : 'PLAYING',
                                })}>
                                {list[2].toUpperCase()}
                            </span>
                        </div>
                        <div class="col 1 detail-note fourth-note">
                            <span className="note" 
                                style={{ color: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[3], '3') ? 'green' : 'white'  }}
                                onClick={ () => this.setState({
                                    note: buildAudio(list[3], '3'),
                                    status: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[3], '3') ? 'STOPPED' : 'PLAYING',
                                })}>
                                {list[3].toUpperCase()}
                            </span>                        </div>
                        <div class="col 1 detail-note fifth-note">
                            <span className="note" 
                                style={{ color: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[4], '4') ? 'green' : 'white'  }}
                                onClick={ () => this.setState({
                                    note: buildAudio(list[4], '4'),
                                    status: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[4], '4') ? 'STOPPED' : 'PLAYING',
                                })}>
                                {list[4].toUpperCase()}
                            </span>
                        </div>
                        <div class="col 1 detail-note sixth-note">
                            <span className="note"
                                style={{ color: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[5], '5') ? 'green' : 'white'  }}
                                onClick={ () => this.setState({
                                    note: buildAudio(list[5], '5'),
                                    status: this.state.status === 'PLAYING' && this.state.note === buildAudio(list[5], '5') ? 'STOPPED' : 'PLAYING',
                                })}>
                                {list[5].toUpperCase()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function buildAudio(note, index){
    
    var sharp = "";
    if (note.indexOf("#") >=0 ) {
        sharp="-sharp";
        note = note.replace("#","");
    }
    
    return "audio/"+note+sharp+"-"+index+".mp3";
}


export default PageDetailView;