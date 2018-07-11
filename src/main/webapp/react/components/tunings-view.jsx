import React from 'react';
import PageHeader from './header.jsx';
import TuningList from './tuning-list.jsx';
import AddView from './add-view';
import PageFooter from './footer.jsx';
import LoginView from './login.jsx';
import LogoutView from './logout.jsx';
import '../css/index.css';

class TuningsView extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            admin: false
        }
        this.Login = this.Login.bind( this );
        this.Logout = this.Logout.bind( this );
    }
    Login() {
        //this.setState({admin:true});
        //this.forceUpdate();
        window.sessionStorage.clear();
        window.sessionStorage.setItem( "isAdmin", true );
        window.location.reload();
    }
    Logout() {
        window.sessionStorage.clear();
        window.location.reload();
    }
    render() {
        return (
            <div className='page-view'>
                <PageHeader title='Keyhole Guitar Tuner' />
                {//<li>{!window.sessionStorage.getItem("isAdmin") && <LoginView Login = {() => this.Login()} />}</li>
                //<li>{window.sessionStorage.getItem("isAdmin") && <LogoutView Logout ={() => this.Logout()}/>}</li>
                }
                <div className="tunings-view">
                    <TuningList isAdmin={window.sessionStorage.getItem( "isAdmin" )} />
                </div>
                {window.sessionStorage.getItem( "isAdmin" ) && <AddView />}
                <PageFooter />
            </div>
        );
    }

}

export default TuningsView;