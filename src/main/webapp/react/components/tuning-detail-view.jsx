import React from 'react';
import PageHeader from './header.jsx';

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

class PageDetailView extends React.Component{
    render(){
        let desc;
        let notes;
        TUNINGS.forEach((tuning) =>{
            const path = '/' + tuning.id;
            if(path === this.props.location.pathname){
                desc = tuning.description;
                notes = tuning.notes;
            }
        });

        return(
            <div>
                <PageHeader title={desc} />
                <a href="index" data-transition="slide" data-role="button" data-theme="d" data-icon="arrow-l" >Back</a>
                <p>{desc}</p>
                <p>{notes}</p>
            </div>
        );
    }
}

export default PageDetailView;