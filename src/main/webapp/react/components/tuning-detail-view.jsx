import React from 'react';
import PageHeader from './header.jsx';
import fret from "../fret2.jpg";
import '../css/materialize.min.css';

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

        let list = notes.split(", ");
        
        
        return(
            <div className="detail-view">
                <PageHeader title={desc} />
                <a href="index" class="btn-small teal accent-4 detail-back"><i class="material-icons left">keyboard_backspace</i>back</a>
                
                <img className="detail-image" src={fret} alt="Fret"/>
                <div class="row">
                    <div class="col 4"></div>
                    <div class="col 1 detail-note first-note">{list[0].toUpperCase()}</div>
                    <div class="col 1 detail-note second-note">{list[1].toUpperCase()}</div>
                    <div class="col 1 detail-note third-note">{list[2].toUpperCase()}</div>
                    <div class="col 1 detail-note fourth-note">{list[3].toUpperCase()}</div>
                    <div class="col 1 detail-note fifth-note">{list[4].toUpperCase()}</div>
                    <div class="col 1 detail-note sixth-note">{list[5].toUpperCase()}</div>
                </div>
                
            </div>
        );
    }
}

export default PageDetailView;