import React from 'react';
import PageHeader from './header.jsx';
import TuningList from './tuning-list.jsx';
import AddView from './add-view';
import PageFooter from './footer.jsx';
import '../css/index.css';


class TuningsView extends React.Component {
	constructor() {
		super();
		this.state = {
			tuningsArray: [],
		};
	}
	
	componentWillMount() {
		fetch('http://localhost:8765/tunings')
		.then(results => { return results.json(); })
		.then(data => {
			this.setState({tuningsArray: data._embedded.tunings});
		})
		.catch((error) => {console.log(error)});
		
	}
    render(){
        return(
            <div className='page-view'>
                <PageHeader title='Keyhole Guitar Tuner'/>
                {//<TuningList tunings={this.props.tunings} />
                }
                <TuningList tunings={this.state.tuningsArray} />
                <AddView/>
                <PageFooter />
            </div>
        );
    }

}

export default TuningsView;