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
            <div className="tunningsListContainer" data-role='content'>
                <ul>
                    {tunings}
                </ul>
            </div>
        );
    }
}

export default TuningList;