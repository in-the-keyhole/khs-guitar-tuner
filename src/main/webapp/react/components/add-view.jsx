import React from 'react';
import { Modal } from 'react-materialize';
import '../css/index.css';
import '../css/materialize.min.css';

const NOTES = ["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#"];
class AddView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            notes: '',
            errorMessageN: '',
            saveDismiss: true,
            errorMessageD: '',
            list: [],
            tunings: [],
            lastTune: 0,
            lastId: 0,
            styleString: 'hidden'
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value }, function () {
            this.handleChangeNotes();
            this.handleChangeDescription();
        });
    }
    handleChangeDescription() {
        if (this.state.notes.length > 3 && this.state.description.length < 1) {
            this.setState({ errorMessageD: "Please name your tuning", saveDismiss: true });
        }
        else if (this.state.description.length >= 1) {
            this.setState({ errorMessageD: '' });
        }
    }
    handleChangeNotes() {
        if (this.state.notes.length > 3) {
            let noteCount = 0;
            let list = this.state.notes.split(',');
            for (let i = 0; i < list.length; i++) {
                list[i] = list[i].replace(" ", "");
                for (let k = 0; k < NOTES.length; k++) {
                    if (list[i] === NOTES[k]) {
                        noteCount++;
                    }
                }
            }
            if (noteCount === 6 && list.length === 6) {
                this.setState({ errorMessageN: '', saveDismiss: false, list: list });
            }
            else if (noteCount < list.length - 1 || list.length > 7) {
                this.setState({ errorMessageN: "Please enter 6 valid notes", saveDismiss: true })
            }
            else {
                this.setState({ errorMessageN: '', saveDismiss: true })
            }
        }
    }
    cancel() {
        this.setState({ description: '', notes: '', saveDismiss: true, errorMessageD: '', errorMessageN: '' });
    }
    getLength(tunings){
     if (tunings){
     return tunings.length
     }
    }
    
    componentWillMount() {
        fetch( 'http://localhost:8765/tunings' )
            .then( results => { return results.json(); } )
            .then( data => {
                let tunings = data._embedded.tunings;
                this.setState({lastTune: this.getLength(tunings) - 1});
                this.setState( {lastId: tunings[this.state.lastTune].id + 1});
            } )
            .catch(( error ) => { console.log( error ) } );
            console.log(this.state.lastId);

            if(this.props.isAdmin){
                this.setState({styleString: 'visable'});
                
            }
    }
    
    handleClick(event) {
        //send tuning name and notes to somewhere to create a new tuning
		fetch('http://localhost:8765/tunings', {
		  method: 'post',
		  headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({id: this.state.lastId, description: this.state.description, notes: this.state.notes})
		})
		window.location.reload();
    }
    render() {
        const styles = {
            containerStyle: {
                visibility: this.state.styleString,
            }
        };
        const { containerStyle } = styles;

        return (
            <Modal
                header='Add Tuning' trigger={<a class='btn-floating btn-large blue darken-4 tuning-add'><i class="material-icons right">add</i></a>}
                actions={
                    <div class="modal-footer">
                        <a class="btn-small blue darken-4 modal-action modal-close" onClick={() => this.cancel()}><i class="material-icons right">cancel</i>cancel</a>
                        {' '}
                        <a class="btn-small blue darken-4 modal-close" onClick={() => this.handleClick()} disabled={this.state.saveDismiss}><i class="material-icons right">save</i>save</a>
                    </div>
                }>
                <h5>Description</h5>
                <div className='input-field'>
                    <input type="text" placeholder="Tuning Name" name="description" value={this.state.description} onChange={(value) => this.onChange(value)} />
                    <label>{this.state.errorMessageD}</label>
                </div>
                <h5>Notes</h5>
                <div className='input-field'>
                    <input type="text" placeholder="e, a, d, g, b, e" name="notes" value={this.state.notes} onChange={(value) => this.onChange(value)} />
                    <label>{this.state.errorMessageN}</label>
                </div>
            </Modal>
        );
    }
}


export default AddView;