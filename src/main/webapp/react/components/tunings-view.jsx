import React from 'react';
import PageHeader from './header.jsx';
import TuningList from './tuning-list.jsx';
import AddView from './add-view';
import PageFooter from './footer.jsx';
import LoginView from './login.jsx';
import '../css/index.css';

class TuningsView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            admin:false
        }
        this.Login = this.Login.bind(this);
    }
    Login(){
        this.setState({admin:true});
        this.forceUpdate();
    }
    
    render() {
        return (
            <div className='page-view'>
                <PageHeader title='Keyhole Guitar Tuner' />
                <ul class = "right">
                <li><LoginView Login = {() => this.Login()} /></li>
                </ul>
                <TuningList isAdmin = {this.state.admin}/>
                {this.state.admin && <AddView isAdmin/>}
                <PageFooter />
            </div>
        );
    }

}

export default TuningsView;