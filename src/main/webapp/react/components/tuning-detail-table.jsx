
import { PageHeader } from "./header";
//import {DetailViewHeader} from "./tuning-detail-header";
/*
class DetailViewHeader extends React.Component{
render(){
    return(
        <div>
            <div data-role = "header">
                <PageHeader title = {this.prop.description}/>
                <a id = "back" href = "#main" data-transition = "slide"
                data-role = "button" data-theme = "d" data-icon = "arrow-l">Back</a>
            </div>
        </div>
    );
}
}
*/
    


export class ViewDetailTable extends React.Component{
    //unsure how to use a loop to populate the table so
    //for now hardcoding each table item in with the correct prop
    render(){
        return(
            <div>
               <div data-role = "header">
                <PageHeader title = {this.prop.description}/>
                <a id = "back" href = "#main" data-transition = "slide"
                data-role = "button" data-theme = "d" data-icon = "arrow-l">Back</a>
            </div>
                <div data-role = "content">
                 <table border = "0">
                <tr>
                    <td>
                        <h2>{(this.props.currentList[0]).toUpperCase()}</h2>
                    </td>
                    <td>
                        <audio controls="controls">
					<source src= {this.props.currentAudio[0]} type="audio/mp3" />
					Your browser does not support this audio format.
				</audio>
                    </td>
                    <td>
                        <h2>{(this.props.currentList[1]).toUpperCase()}</h2>
                    </td>
                    <td>
                        <audio controls="controls">
					<source src= {this.props.currentAudio[1]} type="audio/mp3" />
					Your browser does not support this audio format.
				</audio>
                    </td>
                    <td>
                        <h2>{(this.props.currentList[2]).toUpperCase()}</h2>
                    </td>
                    <td>
                        <audio controls="controls">
					<source src= {this.props.currentAudio[2]} type="audio/mp3" />
					Your browser does not support this audio format.
				</audio>
                    </td>
                    <td>
                        <h2>{(this.props.currentList[3]).toUpperCase()}</h2>
                    </td>
                    <td>
                        <audio controls="controls">
					<source src= {this.props.currentAudio[3]} type="audio/mp3" />
					Your browser does not support this audio format.
				</audio>
                    </td>
                    <td>
                        <h2>{(this.props.currentList[4]).toUpperCase()}</h2>
                    </td>
                    <td>
                        <audio controls="controls">
					<source src= {this.props.currentAudio[4]} type="audio/mp3" />
					Your browser does not support this audio format.
				</audio>
                    </td>
                    <td>
                        <h2>{(this.props.currentList[5]).toUpperCase()}</h2>
                    </td>
                    <td>
                        <audio controls="controls">
					<source src= {this.props.currentAudio[5]} type="audio/mp3" />
					Your browser does not support this audio format.
				</audio>
                    </td>
                </tr>

                 </table>
                </div>
            </div>
        );
    }
    
}