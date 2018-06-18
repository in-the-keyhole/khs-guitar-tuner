class TuningsView extends React.Component {
    render(){
        return(
            <div>
                <PageHeader title='Keyhole Guitar Tuner'/>
                <TuningList tunings={this.props.tunings} />
                <PageFooter />
            </div>
        );
    }
}

const TUNINGS = [
    {id: 1234567, description: 'Standard', notes: 'e,a,d,g,b,e'},
    {id: 1234567, description: 'DROP D', notes: 'd,a,d,g,b,e'},
    {id: 1234567, description: 'DADGAD', notes: 'd,a,d,g,a,d'},
    {id: 1234567, description: 'Half Step Down', notes: 'd#,g#,c#,f#,a#,d#'},
    {id: 1234567, description: 'Whole Step Down', notes: 'd,g,c,f,a,d'},
    {id: 1234567, description: 'OPEN C', notes: 'c,g,c,g,c,e'},
    {id: 1234567, description: 'OPEN D', notes: 'd,a,d,f#,a,d'},
    {id: 1234567, description: 'OPEN G', notes: 'd,g,d,g,b,d'}
];

ReactDOM.render(<TuningsView tunings={TUNINGS} />, document.getElementById('root'));