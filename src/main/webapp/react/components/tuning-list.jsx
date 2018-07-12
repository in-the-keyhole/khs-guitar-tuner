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
        fetch( '/api-tunings' )
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