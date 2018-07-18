/*Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

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