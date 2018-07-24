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
import LoginView from './login.jsx';
import LogoutView from './logout.jsx';
import { NavLink } from 'react-router-dom';
import '../css/index.css';
import '../css/materialize.min.css';

class PageHeader extends React.Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper header-container">
                    <a className="header-title">{this.props.title}</a>
                    <ul class="right">
                        <li className='header-btn'>{this.props.isMainPage && this.props.isAdmin && <LogoutView Logout = {() => this.props.Logout()}/>}</li>
                        <li className='header-btn'>{this.props.isMainPage && !this.props.isAdmin && <LoginView Login = {() => this.props.Login()}/>} class="hide-on-small-only"></li>
                        <li className='header-btn header-about'><NavLink to="/about"><i class="small material-icons">help_outline</i></NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default PageHeader;