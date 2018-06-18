export class Tuning extends React.Component {
    render(){
        return(
            <li>
                <div>
                    <a className='tunning' href={this.props.id}>
                        <h4>{this.props.description}</h4>
                        <p>{this.props.notes}</p>
                    </a>
                </div>
            </li>
        );
    }
}