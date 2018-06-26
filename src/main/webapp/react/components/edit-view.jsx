import React from 'react';
import { Modal } from 'react-materialize';
import '../css/index.css';
import '../css/materialize.min.css';

class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            description: this.props.description,
            notes: this.props.notes,
        };
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    cancel() {
        this.setState({description: this.props.description, notes: this.props.notes});
    }
    
    render(){
        return(
            <Modal
                header='Edit Tuning'
                trigger={<a class="btn-small teal accent-4"><i class="material-icons right">edit</i>edit</a>}
                actions={
                    <div class="modal-footer">
                        <a class="btn-small teal accent-4 modal-close" onClick={() => this.cancel()}><i class="material-icons right">cancel</i>cancel</a>
                        {' '}
                        <a class="btn-small teal accent-4 modal-close"><i class="material-icons right">save</i>save</a>
                    </div>
                }>
                <h5>Description</h5>
                <input type="text" name="description" value={this.state.description} onChange={(value) => this.onChange(value)}/>
                <h5>Notes</h5>
                <input type="text" name="notes" value={this.state.notes} onChange={(value) => this.onChange(value)}/>
            </Modal>
        );
    }
}

export default Edit;