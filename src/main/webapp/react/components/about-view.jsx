class AboutView extends React.Component{
    render(){
        return(
            <div> 
                <div data-role="header">
                    <PageHeader title='Keyhole Software' />
                    <a href="#main" data-transition="slide" data-role="button" data-theme="d" data-icon="arrow-l" >Back</a>
                </div>
                <div data-role="content"> 
                    <h1>HTML5 Guitar Tuner Application</h1>
                    <p>
                    <label>Built by <a href="www.keyholesoftware.com">Keyhole Software</a> using HTML5 elements and java script libraries</label>
                    </p>
                    <label>Select a listed guitar tuning, HTML5 audio tags for each note in the tuning can be played</label>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AboutView />, document.getElementById('root'));