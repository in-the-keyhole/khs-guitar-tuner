 export class TuningList extends React.Component {
    render(){
        const tunings = [];

        this.props.tunings.forEach((tuning) =>{
           tunings.push(
             <Tuning description={tuning.description} notes={tuning.notes} id={tuning.id}/>
           );
        });
        return(
            <div className="tunningsListContainer" data-role='content'>
                <ul>
                    {tunings}
                </ul>
            </div>
        );
    }
}