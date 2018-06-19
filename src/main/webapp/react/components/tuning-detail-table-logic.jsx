import {ViewDetailTable} from "./tuning-detail-table";
const list;
const audioFile;
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
          for(const i = 0; i < list.length; i++) {
              audioFile.push("audio/"+list[i]+"-"+i+".mp3");
          }
        }
        this.setState({currentListItem : list, currentAudioFile: audioFile, 
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
        return(<ViewDetailTable currentList = {currentList} currentAudio = {currentAudioFile} index = {currentIndex} max = {maxLength} />);
    }
}