export class Tuning extends React.Component {
    render(){
        return(
            <li>
                <div>
                    <a className='tuning' href={this.props.id}>
                        <h4 className='li-desc'>{this.props.description}</h4>
                        <p className='li-notes'>{this.props.notes}</p>
                    </a>
                </div>
            </li>
        );
    }
}