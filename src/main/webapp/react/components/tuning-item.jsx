import React from 'react';
import Edit from './edit-view.jsx';
import Delete from './delete-view.jsx';
import '../css/index.css';
import '../css/materialize.min.css';
import { NavLink } from 'react-router-dom';

class Tuning extends React.Component {
    constructor(props){
        super(props);
        this.reloadUpdate = this.reloadUpdate.bind(this);
    }
    reloadUpdate(updatedTuning){
        this.props.reloadUpdate(updatedTuning);
    }
    render(){
        return(
            <div class="card blue-grey darken-4">
               <div class="card-content white-text">
                  <span class="card-title">{this.props.description}</span>
                  <p>{this.props.notes}</p>
               </div>
               <div class="card-action">
                  <div className="card-buttons">
                      <NavLink 
                          to={'/tunings/'+this.props.id}
                          class="btn-small blue darken-4"><i class="material-icons right">folder</i>open
                      </NavLink>
                  </div>
                  <div className="card-buttons">
                     {this.props.isAdmin && <Edit description={this.props.description} notes={this.props.notes} id={this.props.id} reloadUpdate={this.reloadUpdate}/>}
                  </div>
                  <div className="card-buttons">
                      {this.props.isAdmin &&  <Delete description={this.props.description} notes={this.props.notes} id={this.props.id}/>}
                  </div>
               </div>
            </div>
        );
    }
}


export default Tuning;