import React from 'react';
import Edit from './edit-view.jsx';
import Delete from './delete-view.jsx';
import '../css/index.css';
import '../css/materialize.min.css';

class Tuning extends React.Component {
    render(){
        return(
            <div class="card blue-grey darken-4">
               <div class="card-content white-text">
                  <span class="card-title">{this.props.description}</span>
                  <p>{this.props.notes}</p>
               </div>
               <div class="card-action">
                  <div className="card-buttons">
                      <a 
                          href={'/tunings/'+this.props.id}
                          class="btn-small blue darken-4"><i class="material-icons right">folder_open</i>open
                      </a>
                  </div>
                  <div className="card-buttons">
                      <Edit description={this.props.description} notes={this.props.notes} id={this.props.id}/>
                  </div>
                  <div className="card-buttons">
                      <Delete description={this.props.description} notes={this.props.notes} id={this.props.id}/>
                  </div>
               </div>
            </div>
        );
    }
}


export default Tuning;