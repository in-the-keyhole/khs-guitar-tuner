import React from 'react';
import PageHeader from './header.jsx';
import TuningList from './tuning-list.jsx';
import AddView from './add-view';
import PageFooter from './footer.jsx';
import '../css/index.css';

class TuningsView extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            admin: false,
            newTuning: null,
            updatedTuning: null
        }
        this.Login = this.Login.bind( this );
        this.Logout = this.Logout.bind( this );
        this.reloadNew = this.reloadNew.bind(this);
    }
    Login() {
        window.sessionStorage.clear();
        window.sessionStorage.setItem( "isAdmin", true );
        window.location.reload();
    }
    Logout() {
        window.sessionStorage.clear();
        window.location.reload();
    }
    reloadNew(newTuning){
        this.setState({newTuning: newTuning});
    }
    render() {
        return (
            <div className='page-view'>
                <PageHeader title='Keyhole Guitar Tuner' isMainPage = {true} Login = {() => this.Login()}
                Logout = {() => this.Logout()} isAdmin = {window.sessionStorage.getItem("isAdmin")}/>
                <div className="tunings-view">
                    <TuningList isAdmin={window.sessionStorage.getItem( "isAdmin" )} newTun={this.state.newTuning}/>
                </div>
                {window.sessionStorage.getItem( "isAdmin" ) && <AddView reloadNew={this.reloadNew} />}
                <PageFooter />
            </div>
        );
    }

}

export default TuningsView;