import React from 'react';
import '../css/index.css';
import '../css/materialize.min.css';

class PageHeader extends React.Component {
    render(){
        return(
             <div className="header-container">
                <a className="header-title">{this.props.title}</a>
                <ul class="right">
                  <li><a href="about"><i class="small material-icons header-about">help_outline</i></a></li>
                </ul>
              </div>
        );
    }
}

export default PageHeader;