import React from 'react';
import PageHeader from './header.jsx';
import TuningList from './tuning-list.jsx';
import AddView from './add-view';
import PageFooter from './footer.jsx';
import '../css/index.css';

class TuningsView extends React.Component {
    render() {
        return (
            <div className='page-view'>
                <PageHeader title='Keyhole Guitar Tuner' />
                <TuningList />
                <AddView />
                <PageFooter />
            </div>
        );
    }

}

export default TuningsView;