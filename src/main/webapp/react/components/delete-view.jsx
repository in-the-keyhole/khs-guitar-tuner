import React from 'react';
import { Modal } from 'react-materialize';
import '../css/index.css';
import '../css/materialize.min.css';

class Delete extends React.Component {
	 handleClick(event) {
        //send tuning name and notes to somewhere to create a new tuning
		fetch('http://localhost:8765/tunings/' + this.props.id, {
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