import React from 'react';
import { Modal } from 'react-materialize';
import '../css/index.css';
import '../css/materialize.min.css';

class Delete extends React.Component {
    render(){
        return(
            <Modal
                header='Delete Tuning'
                trigger={<a class="btn-small blue darken-4 tuning-delete"><i class="material-icons right">delete</i>delete</a>}
                actions={
                    <div class="modal-footer">
                        <a class="btn-small blue darken-4 modal-close"><i class="material-icons right">cancel</i>cancel</a>
                        {' '}
                        <a class="btn-small blue darken-4 modal-close"><i class="material-icons right">delete</i>delete</a>
                    </div>
                }>
                <h5>Are you sure you want to delete?</h5>
                <p>This action is irreversible.</p>
            </Modal>
        );
    }
}

export default Delete;