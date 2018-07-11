import React from 'react';
import Tuning from './tuning-item.jsx';

class TuningList extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            tunings: []
        };
    }
    componentWillMount() {
        fetch( 'DATABASE_URL' )
            .then( results => { return results.json(); } )
            .then( data => {
                this.setState( { tunings: data._embedded.tunings } );
            } )
            .catch(( error ) => { console.log( error ) } );
    }
    render(){
        const tunings = [];

        this.state.tunings.forEach((tuning) =>{
           tunings.push(
             <Tuning description={tuning.description} notes={tuning.notes} id={tuning.id}
             isAdmin = {this.props.isAdmin}/>
           );
        });
        
        return(
                <div class="row">
                    <div class="col s12">{tunings}</div>
                </div>
        );
    }
}

export default TuningList;