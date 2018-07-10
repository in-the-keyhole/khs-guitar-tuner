import React from 'react';
import Sound from 'react-sound';
import '../css/index.css';
import '../css/materialize.min.css';

class Strum extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status: 'STOPPED'
        }
    }
    
    newClick(){
        this.setState({status: 'PLAYING'});
        this.props.isPlaying();
    }

    newFinished(){
        this.setState({status: 'STOPPED'});
        this.props.isStopped();
    }

    render(){
        return(
            <div>
                <Sound url={buildAudio(this.props.list[0], '0')} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={buildAudio(this.props.list[1], '1')} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={buildAudio(this.props.list[2], '2')} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={buildAudio(this.props.list[3], '3')} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={buildAudio(this.props.list[4], '4')} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={buildAudio(this.props.list[5], '5')} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
        
                <a 
                    onClick={() => this.newClick()} 
                    class="btn-small blue darken-4 chord-button" 
                    disabled={ this.state.status === 'PLAYING' ? true : false }>
                    <i class="material-icons right">play_arrow</i>strum</a>
            </div>
        );
    }
}

function buildAudio(note, index){
    
    var sharp = "";
    if (note && note.indexOf("#") >=0 ) {
        sharp="-sharp";
        note = note.replace("#","");
    }
    
    return "/audio/"+note+sharp+"-"+index+".mp3";
}

export default Strum;