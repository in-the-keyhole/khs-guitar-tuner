import React from 'react';
import PageHeader from './header.jsx';
import TuningList from './tuning-list.jsx';
import AddView from './add-view';
import '../css/index.css';
import {Modal,Button,Icon} from 'react-materialize';

const TUNINGS = [
    {id: 1001, description: 'Standard', notes: 'e, a, d, g, b, e'},
    {id: 1002, description: 'DROP D', notes: 'd, a, d, g, b, e'},
    {id: 1003, description: 'DADGAD', notes: 'd, a, d, g, a, d'},
    {id: 1004, description: 'Half Step Down', notes: 'd#, g#, c#, f#, a#, d#'},
    {id: 1005, description: 'Whole Step Down', notes: 'd, g, c, f, a, d'},
    {id: 1006, description: 'OPEN C', notes: 'c, g, c, g, c, e'},
    {id: 1007, description: 'OPEN D', notes: 'd, a, d, f#, a, d'},
    {id: 1008, description: 'OPEN G', notes: 'd, g, d, g, b, d'}
];

class TuningsView extends React.Component {
    render(){
        return(
            <div className='page-view'>
                <PageHeader title='Keyhole Guitar Tuner'/>
                {//<TuningList tunings={this.props.tunings} />
                }
                <TuningList tunings={TUNINGS} />
                <AddView/>
            </div>
        );
    }

}

export default TuningsView;