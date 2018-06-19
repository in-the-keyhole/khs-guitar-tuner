import {jqueary} from "./libs/jquery-1.7.2.js";

class DetailImageView extends React.Component{
    render(){
        return(
            <div>
                <div data-role = "header"/>
                <PageHeader title = {this.prop.description}/>
                <a id="back" href="#main" data-transition="slide" data-role="button"
		data-theme="d" data-icon="arrow-l">Back</a>

        <div id="strings" style="text-align:center;background-color:black; width:100%;height:100%;overflow:hidden;" data-role="content">

	<canvas id="canvas" style="display:inline;" width="180" height="250">
    </canvas>
    <audio id={this.props.audioId[0]} loop="loop">
					<source src={this.prop.audioFile[0]} type="audio/mp3" />
					Your browser does not support this audio format.
		</audio>
        <audio id={this.props.audioId[1]} loop="loop">
					<source src={this.prop.audioFile[1]} type="audio/mp3" />
					Your browser does not support this audio format.
		</audio>
        <audio id={this.props.audioId[2]} loop="loop">
					<source src={this.prop.audioFile[2]} type="audio/mp3" />
					Your browser does not support this audio format.
		</audio>
        <audio id={this.props.audioId[3]} loop="loop">
					<source src={this.prop.audioFile[3]} type="audio/mp3" />
					Your browser does not support this audio format.
		</audio>
        <audio id={this.props.audioId[4]} loop="loop">
					<source src={this.prop.audioFile[4]} type="audio/mp3" />
					Your browser does not support this audio format.
		</audio>
        <audio id={this.props.audioId[5]} loop="loop">
					<source src={this.prop.audioFile[5]} type="audio/mp3" />
					Your browser does not support this audio format.
		</audio>
    </div>
            </div>
        );
    }

}

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