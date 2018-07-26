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

const NOTES = ["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#"];
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            notes: this.props.notes,
            errorMessN: '',
            errorMessD: '',
            saveDismiss: true,
            list: []
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }, function () {
            this.handleChangeN();
            this.handleChangeD();
        });
    }
    handleChangeD() {
        if (this.state.notes.length > 3 && this.state.description.length < 1) {
            this.setState({ errorMessD: "Please name your tuning", saveDismiss: true });
        }
        else if (this.state.description.length >= 1) {
            this.setState({ errorMessD: '' });
        }
    }
    handleChangeN() {
        if (this.state.notes.length > 3) {
            let noteCount = 0;
            let list = this.state.notes.split(',');
            for (let i = 0; i < list.length; i++) {
                list[i] = list[i].replace(" ", "");
                for (let k = 0; k < NOTES.length; k++) {
                    if (list[i] === NOTES[k]) {
                        noteCount++;
                    }
                }
            }
            if (noteCount === 6 && list.length === 6) {
                this.setState({ errorMessN: '', saveDismiss: false, list: list });
            }
            else if (noteCount < list.length - 1 || list.length > 7) {
                this.setState({ errorMessN: "Please enter 6 valid notes", saveDismiss: true });
            }
            else {
                this.setState({ errorMessN: '', saveDismiss: true });
            }
        }
    }
    cancel() {
        this.setState({
            description: this.props.description, notes: this.props.notes, saveDismiss: true,
            errorMessD: '', errorMessN: ''
        });
    }
    handleClick(event) {
        this.setState({ saveDismiss: true, errorMessageD: '', errorMessageN: '' });
        fetch('/api/tunings', {
		  method: 'post',
		  headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({id: this.props.id, description: this.state.description, notes: this.state.notes})
		})
		let updatedTun = {id: this.props.id, description: this.state.description, notes: this.state.notes};
        this.props.reloadUpdate(updatedTun);
    }
    render() {
        return (
            <Modal
                header='Edit Tuning'
                trigger={<a class="btn-small blue darken-4"><i class="material-icons right">edit</i>edit</a>}
                actions={
                    <div class="modal-footer">
                        <a class="btn-small blue darken-4 modal-close" onClick={() => this.cancel()}><i class="material-icons right">cancel</i>cancel</a>
                        {' '}
                        <a class="btn-small blue darken-4 modal-close" disabled={this.state.saveDismiss} onClick={() => this.handleClick()}><i class="material-icons right">save</i>save</a>
                    </div>
                }>
                <h5>Description</h5>
                <div className='input-field'>
                    <input type="text" name="description" value={this.state.description} maxLength='35' onChange={(value) => this.onChange(value)}
                        placeholder="Tuning Name" />
                    <label>{this.state.errorMessD}</label>
                </div>
                <div className='input-field'>
                    <h5>Notes</h5>
                    <input type="text" name="notes" value={this.state.notes} onChange={(value) => this.onChange(value)}
                        placeholder="e, a, d, g, b, e" />
                    <label>{this.state.errorMessN}</label>
                </div>
            </Modal>
        );
    }
}

export default Edit;