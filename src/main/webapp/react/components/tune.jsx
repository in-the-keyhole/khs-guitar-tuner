import React from 'react';
import Sound from 'react-sound';
import '../css/index.css';
import '../css/materialize.min.css';

class Tune extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            status: 'STOPPED',
            count: 0
        }
        this.startTune = this.startTune.bind( this );
    }
    startTune() {
        this.state.status === 'STOPPED' ? this.setState( { status: 'PLAYING' } ) : this.setState( { status: 'STOPPED', count: 0 } );
    }
    handleAudio(AudioList){
        if(this.state.count < 5){
            return AudioList[0];
        } else if(this.state.count < 10){
            return AudioList[1];
        } else if(this.state.count < 15){
            return AudioList[2];
        } else if(this.state.count < 20){
            return AudioList[3];
        } else if(this.state.count < 25){
            return AudioList[4];
        } else if(this.state.count < 30){
            return AudioList[5];
        } else if(this.state.count === 30){
            this.setState({status: 'STOPPED', count: 0});
            return '';
        }
    }
    render() {
        var AudioList =[];
        AudioList.push(buildAudio( this.props.list[0], '0' ));
        AudioList.push(buildAudio( this.props.list[1], '1' ));
        AudioList.push(buildAudio( this.props.list[2], '2' ));
        AudioList.push(buildAudio( this.props.list[3], '3' ));
        AudioList.push(buildAudio( this.props.list[4], '4' ));
        AudioList.push(buildAudio( this.props.list[5], '5' ));
        return (
            <div>
                <Sound
                    url={this.handleAudio(AudioList)}
                    playStatus={this.state.status}
                    onFinishedPlaying={() => this.setState({count: this.state.count+1})}/>

                <a
                    onClick={() => this.startTune()}
                    class="btn-small blue darken-4 tune-button">
                    <i class="material-icons right">music_note</i>tune</a>
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

export default Tune;