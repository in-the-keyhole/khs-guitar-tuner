import {ViewDetailTable} from "./tuning-detail-table";

let list = "";
let audioFile = "";

class ViewDetailTableLogic extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentList : "",
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
          for(let i = 0; i < list.length; i++) {
              audioFile.push("audio/"+list[i]+"-"+i+".mp3");
          }
        }
        this.setState({currentList : list, currentAudioFile: audioFile, 
            currentIndex: 0, maxLength: list.length})
    
    }
    /*
    moveNext(){
        
        this.setState({currentList: currentList[currentIndex],
            currentAudioFile:currentAudioFile[currentIndex], currentIndex:currentIndex+1})
    }
    */
    render(){
         
        //return a table that has props for list and audioFile
        return(<ViewDetailTable currentList = {this.state.currentList} currentAudio = {this.state.currentAudioFile}
             index = {this.state.currentIndex} max = {this.state.maxLength} description = {this.props.description}/>);
    }
}

//ReactDOM.render(<ViewDetailTableLogic/>,document.getElementById("root"));