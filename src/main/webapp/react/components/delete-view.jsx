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
import { Modal } from 'react-materialize';
import '../css/index.css';
import '../css/materialize.min.css';

class Delete extends React.Component {
	 handleClick(event) {
		fetch('/api/tunings/' + this.props.id, {
		  method: 'DELETE',
		  headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		  }
		})
		window.location.reload();
    }
	
    render(){
        return(
            <Modal
                header='Delete Tuning'
                trigger={<a class="btn-small blue darken-4"><i class="material-icons right">delete</i>delete</a>}
                actions={
                    <div class="modal-footer">
                        <a class="btn-small blue darken-4 modal-close"><i class="material-icons right">cancel</i>cancel</a>
                        {' '}
                        <a class="btn-small blue darken-4 modal-close" onClick={() => this.handleClick()}><i class="material-icons right" >delete</i>delete</a>
                    </div>
                }>
                <h5>Are you sure you want to delete?</h5>
                <p>This action is irreversible.</p>
            </Modal>
        );
    }
}

export default Delete;