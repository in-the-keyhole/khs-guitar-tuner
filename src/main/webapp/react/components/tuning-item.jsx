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
                  <span class="card-title" class="flow-text">{this.props.description}</span>
                  <p>{this.props.notes}</p>
               </div>
               <div class="card-action">
                  <div className="card-buttons">
                      <NavLink 
                          to={'/tunings/'+this.props.id}
                          class="btn-small blue darken-4"><i class="material-icons right">folder</i><p class="flow-text">open</p>
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