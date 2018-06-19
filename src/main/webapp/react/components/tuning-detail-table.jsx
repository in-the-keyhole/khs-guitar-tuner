
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
const list;
const audioFile;
class ViewDetailTableLogic extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentListItem : "",
            currentAudioFile : "",
            currentIndex: 0,
            maxLength: 0
        };
        this.createAudioFiles = this.createAudioFiles.bind(this);
        this.moveNext = this.moveNext.bind(this);
    }
    createAudioFiles(){
                
    {
        list = this.props.notes.split(",");
          for(const i = 0; i < list.length; i++) {
              audioFile.push("audio/"+list[i]+"-"+i+".mp3");
          }
        }
        this.setState({currentListItem : list[0], currentAudioFile: audioFile[0], 
            currentIndex: 1, maxLength: list.length})
    
    }
    moveNext(){
        
        this.setState({currentListItem: list[currentIndex],
            currentAudioFile:audioFile[currentIndex], currentIndex:currentIndex+1})
    }
    render(){
         
        //return a table that has props for list and audioFile
        return(<ViewDetailTable currentList = {currentListItem} currentAudio = {currentAudioFile} index = {currentIndex} max = {maxLength} />);
    }

    
}


class ViewDetailTable extends React.Component{
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