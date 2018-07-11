import React from 'react';
import LoginView from './login.jsx';
import LogoutView from './logout.jsx';
import '../css/index.css';
import '../css/materialize.min.css';

class PageHeader extends React.Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper header-container">
                    <a className="header-title">{this.props.title}</a>
                    <ul class="right">
                        <li>{this.props.isMainPage && this.props.isAdmin && <LogoutView Logout = {() => this.props.Logout()}/>}</li>
                        <li>{this.props.isMainPage && !this.props.isAdmin && <LoginView Login = {() => this.props.Login()}/>}</li>
                        <li><a href="/about"><i class="small material-icons header-about">help_outline</i></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default PageHeader;