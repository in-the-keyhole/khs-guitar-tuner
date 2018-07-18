/*Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

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