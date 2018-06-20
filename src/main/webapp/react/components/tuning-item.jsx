import React from 'react';
import '../css/index.css';

class Tuning extends React.Component {
    render(){
        return(
            <li className='ul-li-tuning'>
                <div className='Tuning'>
                    <a id='tuning' href={this.props.id} className='tuning-link'>
                        <h4 className='li-desc'>{this.props.description}</h4>
                        <p className='li-notes'>{this.props.notes}</p>
                    </a>
                </div>
            </li>
        );
    }
}

export default Tuning;