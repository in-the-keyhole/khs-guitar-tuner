import React from 'react';
import {Modal} from 'react-materialize';
import '../css/index.css';
import '../css/materialize.min.css';
import Text from '../info.txt';

class LoginView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curUserName: '',
            curPassword: '',
            correctUser: '',
            correctPassword: '',
            isCorrectUser: false,
            isCorrectPassword: false
        };
        this.onChange = this.onChange.bind(this);
        
    }
    componentDidMount(){
        this.getInfo()
    }
    getInfo(){
        let list = '';
        fetch(Text)
        .then((r) => r.text())
        .then(text => {list = text.split(',')
         this.setState({correctUser: list[0], correctPassword: list[1]});
        });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }, function () {
            this.handleUserName();
            this.handlePassword();
        });
    }
    handleUserName(){
         if(this.state.curUserName.length === this.state.correctUser.length){
            let count = 0;
            for(let i = 0; i < this.state.curUserName.length; i++){
                if(this.state.curUserName[i] === this.state.correctUser[i]){
                    count++;
                }
            }
            if(count === this.state.curUserName.length){
                this.setState({isCorrectUser: true});
            }
            else{
                this.setState({isCorrectUser:false});
            }
        }
        else{
                this.setState({isCorrectUser:false});
            }
    }

    handlePassword(){
        if(this.state.curPassword.length === this.state.correctPassword.length){
            let count = 0;
            for(let i = 0; i < this.state.curPassword.length; i++){
                if(this.state.curPassword[i] === this.state.correctPassword[i]){
                    count++;
                }
            }
            if(count === this.state.curPassword.length){
                this.setState({isCorrectPassword:true});
            }
            else{
                this.setState({isCorrectPassword:false});
            }
        }
        else{
                this.setState({isCorrectPassword:false});
            }
    }
    
    cancel(){
        this.setState({curUserName: '', curPassword: '', isCorrectPassword:false , isCorrectUser:false});
    }
    newClick(){
        if(!this.state.isCorrectUser || !this.state.isCorrectPassword){
            window.Materialize.toast("Incorrect username or password",3000, "blue");
            this.setState({curUserName: '', curPassword: '', isCorrectPassword:false , isCorrectUser:false});
        }
        else{
            this.props.Login();
            this.setState({curUserName: '', curPassword: '', isCorrectPassword:false , isCorrectUser:false});
        }
    }
    render(){
        return(
            <Modal header = "Login" trigger={<a>Admin Login</a>}
            actions = {
                <div class = "modal-footer">
                <a class="btn-small blue darken-4 modal-close" onClick = {() => this.cancel()}><i class="material-icons right">cancel</i>cancel</a>
                {' '}
                <a class="btn-small blue darken-4 modal-close" onClick = {() => this.newClick()} ><i class="material-icons right">person</i>login</a>
                </div>
            }>
            <div className = "input-field">
                <input type = "text" placeholder = "Username" name = "curUserName" value = {this.state.curUserName} onChange={(value) => this.onChange(value)} />
            </div>
            <div className = "input-field">
                <input type = "password" placeholder = "Password" name = "curPassword" value = {this.state.curPassword} onChange={(value) => this.onChange(value)}/>
            </div>
            </Modal>
        );
    }
}

export default LoginView;