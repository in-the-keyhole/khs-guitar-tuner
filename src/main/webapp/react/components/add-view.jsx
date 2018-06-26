import React from 'react';
import {Button,Modal,Input,Icon} from 'react-materialize';


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
           <Modal header = 'Add Your Own Tuning' trigger= {<Button floating large className = 'teal tuning-add'icon = 'add' waves = 'light' diabled = 'false'></Button>}
           actions = {<div>
                <Button modal="close" waves="light" className="teal"><Icon left>save</Icon>save</Button>
      <Button flat modal="close" waves="light" onClick={this.clear} icon = "close"></Button>
           </div>}>
                <p>Type the name of your tuning</p>
                    <Input placeholder = "Tuning Name" value = {this.state.tuningName} label = "Tuning Name" id= "tuning_name" onChange ={evt => this.onChange1(evt)} />
                <p>Type the six notes in your tuning</p>
                    <Input placeholder = "e, a, d, g, b, e" value = {this.state.tuningNotes}label = "Notes" id = "tuning_notes" onChange ={evt => this.onChange2(evt)}/>
                </Modal>
        );
    }
}
export default AddView;