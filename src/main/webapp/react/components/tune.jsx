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
    handleAudio(){
        if(this.state.count < 5){
            return this.props.list[0];
        } else if(this.state.count < 10){
            return this.props.list[1];
        } else if(this.state.count < 15){
            return this.props.list[2];
        } else if(this.state.count < 20){
            return this.props.list[3];
        } else if(this.state.count < 25){
            return this.props.list[4];
        } else if(this.state.count < 30){
            return this.props.list[5];
        } else if(this.state.count === 30){
            this.setState({status: 'STOPPED', count: 0});
            return '';
        }
    }
    render() {
        return (
            <div>
                <Sound
                    url={this.handleAudio()}
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

export default Tune;