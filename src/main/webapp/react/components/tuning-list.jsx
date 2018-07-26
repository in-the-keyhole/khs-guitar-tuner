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
import Tuning from './tuning-item.jsx';

class TuningList extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            tunings: []
        };
        this.reloadUpdate = this.reloadUpdate.bind( this );
    }
    componentWillMount() {
        fetch( '/api/tunings' )
            .then( results => { return results.json(); } )
            .then( data => {
                this.setState( { tunings: data._embedded.tunings } );
            } )
            .catch(( error ) => { console.log( error ) } );
    }
    reloadUpdate( updatedTuning ) {
        if ( updatedTuning && updatedTuning !== null ) {
            let i;
            var tunings = this.state.tunings.slice();
            for ( i = 0; i < tunings.length; i++ ) {
                if ( tunings[i].id === updatedTuning.id ) {
                    tunings[i] = updatedTuning;
                    this.setState( { tunings: tunings } );
                }
            }
        }
    }
    render() {
        const tunings = [];

        if ( this.state.tunings && this.props.newTun !== null && this.props.newTun ) {
            let newTunings = this.state.tunings.slice();
            if ( newTunings[newTunings.length - 1].id !== this.props.newTun.id ) {
                newTunings.push( this.props.newTun );
                this.setState( { tunings: newTunings } );
            }
            console.log( "error: this tuning already exists, caught duplicate" );
        }

        if ( this.state.tunings ) {
            this.state.tunings.forEach(( tuning ) => {
                tunings.push(
                    <Tuning description={tuning.description} notes={tuning.notes} id={tuning.id}
                        isAdmin={this.props.isAdmin} reloadUpdate={this.reloadUpdate} />
                );
            } );
        }

        var left = [];
        var right = [];
        
        let i;
        for(i = 0; i < tunings.length; i++){
            if(i % 2 === 0){
                left.push(tunings[i]);
            } else{
                right.push(tunings[i]);
            }
        }
        
        return (
            <div class="row">
                <div class="col s6">{left}</div>
                <div class="col s6">{right}</div>
            </div>
        );
    }
}

export default TuningList;