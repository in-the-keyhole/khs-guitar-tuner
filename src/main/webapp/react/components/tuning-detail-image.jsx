import {jqueary} from "./libs/jquery-1.7.2.js";
import {DetailImageView} from "./tuning-detail-image-view"

class DetailImageViewLogic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: "",
            audioFiles: "",
            audioIds: "",
            index: 0
        }
    }
    render(){
        return(<DetailImageView audioId = {this.audioIds} audioFile = {this.audioFiles}/>);
    }
    createAudioFiles (){
        {
        let list = this.props.notes.split(",");
        let audioFiles;
        let audioIds;
        for(let i = 0; i < list.length; i++){
            let note = list[i];
            let sharp = "";
            if(note.indexOf("#")>= 0){
                sharp ="-sharp";
                note = note.replace("#","");
            }
            audioFile.push("audio/"+note+sharp+"-"+i+".mp3");
            audioIds.push("audio"+i);
        }
        this.setState({notes: list, audioFiles:audioFile, audioIds: audioIds});

    }
   
    }
}