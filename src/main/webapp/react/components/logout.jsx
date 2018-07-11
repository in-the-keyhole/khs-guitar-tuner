import React from 'react';
import {Modal} from 'react-materialize';
import '../css/index.css';
import '../css/materialize.min.css';

class LogoutView extends React.Component{
    constructor(props){
        super(props);
    }
    newClick(){
        this.props.Logout();
    }
    render(){
        return(
            <Modal header = "Logout?" trigger={<a class = "logout-button"><i color = "white" class="small material-icons login-icon">close</i></a>}
            actions = {
                <div class = "modal-footer">
                <a class="btn-small blue darken-4 modal-close"><i class="material-icons right">cancel</i>cancel</a>
                {' '}
                <a class="btn-small blue darken-4 modal-close" onClick = {() => this.newClick()} ><i class="material-icons right">close</i>logout</a>
                </div>
            }>
            </Modal>
        );
    }
}

export default LogoutView;