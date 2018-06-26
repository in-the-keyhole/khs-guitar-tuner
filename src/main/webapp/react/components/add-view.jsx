import React from 'react';
import {Modal} from 'react-materialize';


class AddView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tuningName: '',
            tuningNotes: ''
        }
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.clear = this.clear.bind(this);
    }
    
    onChange1(evt){
        this.setState({tuningName:evt.target.value});
    }
    onChange2(evt){
        this.setState({tuningNotes:evt.target.value});
    }
    clear(){
        this.setState({tuningName:'',tuningNotes:''});
    }
    render(){
        return(
           <Modal 
                header = 'Add Tuning' trigger= {<a class='btn-floating btn-large teal accent-4 tuning-add'><i class="material-icons right">add</i></a>}
                actions={
                        <div class="modal-footer">
                            <a class="btn-small teal accent-4 modal-close"><i class="material-icons right" onClick={this.clear}>cancel</i>cancel</a>
                            {' '}
                            <a class="btn-small teal accent-4 modal-close"><i class="material-icons right">save</i>save</a>
                        </div>
                }>
                    <h5>Description</h5>
                    <input placeholder="Tuning Name" value={this.state.tuningName} label="Tuning Name" onChange ={evt => this.onChange1(evt)} />
                    <h5>Notes</h5>
                    <input placeholder="e, a, d, g, b, e" value={this.state.tuningNotes}label="Notes" onChange ={evt => this.onChange2(evt)}/>
          </Modal>
        );
    }
}
export default AddView;