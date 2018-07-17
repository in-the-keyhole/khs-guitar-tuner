import React from 'react';
import LoginView from './login.jsx';
import LogoutView from './logout.jsx';
import { NavLink } from 'react-router-dom'
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
                        <li className='header-btn'>{this.props.isMainPage && !this.props.isAdmin && <LoginView Login = {() => this.props.Login()}/>}</li>
                        <li className='header-btn header-about'><NavLink to="/about"><i class="small material-icons">help_outline</i></NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default PageHeader;