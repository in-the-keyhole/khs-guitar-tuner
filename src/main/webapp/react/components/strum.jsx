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
                <Sound url={this.props.list[0]} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={this.props.list[1]} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={this.props.list[2]} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={this.props.list[3]} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={this.props.list[4]} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
                <Sound url={this.props.list[5]} autoLoad playFromPosition={250} playStatus={this.state.status} onFinishedPlaying={() => this.newFinished()}/>
        
                <a 
                    onClick={() => this.newClick()} 
                    class="btn-small blue darken-4 strum-button" 
                    disabled={ this.state.status === 'PLAYING' ? true : false }>
                    <i class="material-icons right">play_arrow</i>strum</a>
            </div>
        );
    }
}

export default Strum;