import React from 'react';
import '../css/index.css';

class PageFooter extends React.Component {
    render(){
        return(
            <div className='footer-container'>
                <a href='about'>
                    <button href='about' className='footer-button'>About</button>
                </a>
            </div>
        );
    }
}

export default PageFooter;