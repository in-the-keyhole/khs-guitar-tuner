import React from 'react';
import Tuning from './tuning-item.jsx';

class TuningList extends React.Component {
    render(){
        const tunings = [];

        this.props.tunings.forEach((tuning) =>{
           tunings.push(
             <Tuning description={tuning.description} notes={tuning.notes} id={tuning.id}/>
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