import {jquery} from "./libs/jquery-1.7.2.js";
import {DetailImageViewLogic} from "./tuning-detail-image";
import {ViewDetailTableLogic} from "./tuning-detail-table-logic";

let img = null;
let stringPlaying = -1;

jquery(document).ready(function() {
		
	    img = new Image();
		img.src = "fret2.jpg";
        img.onload = GuitarTuning.fretImageLoad(); 
        //fretImageLoaded;

    });
    
class GuitarTuning extends React.Component{
    constructor(props){
        super(props);
        this.fretImageLoad = this.fretImageLoad.bind(this);
        this.stringLabel = this.stringLabel.bind(this);
        this.playAll = this.playAll.bind(this);
        this.playString = this.playString.bind(this);

        this.state = {
            notes: ""
        }
    }

    fretImageLoad(){
        let canvas = jquery("#canvas")[0];
        let ctx = canvas.getContext("2d");
        let ratio = 1.0;

        let imgWidth = img.width *ratio;
        let imgHeigth = img.height * ratio;
        ctx.canvas.width = imgWidth;
        ctx.canvas.height=imgHeigth;
        ctx.drawImage(img,0,0,imgWidth,imgHeigth);
        
        ctx.font = "bold 32px Arial";

        let notes = "<%notes%>";
        this.setState({notes: notes});
        let list = notes.split(",");

        let strings = [26,63,102,138,174,212];

        for(let i = 0; i < strings.length; i++){
            let x = strings[i]-9;
            let y = 150 - 32;
            ctx.fillStyle = "green";
            
            this.stringLabel(list[i].toUpperCase(),strings[i],"white",ctx);
        }
        
        
        jquery("#canvas").click(function(e) {
	 	         let offsetX = e.pageX - jquery(this).position().left;
	 	         let offsetY = e.pageY - jquery(this).position().top;
	 	         
	 	         for (let i = 0;i < list.length;i=i+1) {  
	 	            var point = strings[i];   	
	 	        	if (offsetX >= point-5 && offsetX <= point + 20 ) {
	 	        		
	 	        		if (stringPlaying == i) {
	 	        		 this.stringLabel(list[i].toUpperCase(),strings[i],"white",ctx);		
	 	        		 this.stopPlay(stringPlaying);
	 	        		 stringPlaying = -1;
	 	        		} else {
	 	        		    if (stringPlaying >=0 ) {
	 	        			 this.stringLabel(list[stringPlaying].toUpperCase(),strings[stringPlaying],"white",ctx);		
		 	        		 this.stopPlay(stringPlaying);
	 	        		    }
	 	        			this.stringLabel(list[i].toUpperCase(),strings[i],"red",ctx);
	 	        			this.playString(i);
	 	        		 
	 	        	   }
	 	           }
	 	        }	
	 				
	 	     });
    
    }

    stringLabel(s,loc,color,ctx){
        let x = loc - 9;
        ctx.fillStyle = color;
        let note;

        if (s.indexOf("#") < 0) {  
    	 	ctx.fillText(s.toUpperCase(), x,150);
  		 } else {
  			 note = s.replace("#","");
  			 ctx.fillText(note, x,150);
  		     ctx.font = "bold 15px Arial";
  		     ctx.fillText("#",x+22,135);
  		     ctx.font = "bold 32px Arial";
  			 
  		 }
    }

    playAll(){
        for (let i = 0; i < 5; i++) {
		   this.playString(i);
		   
	   }
    }

    playString(s){
        let id = "#audio"+s;
	   let a = jquery(id)[0];
	   a.play();
	   stringPlaying = s;
    }

    stopPlay(s){
        let id = "#audio"+s;
	   let a = jquery(id)[0];
	   a.pause();
    }

   
    render(){
      return(<DetailImageViewLogic notes = {this.state.notes} description = {this.props.description}/>,
         <ViewDetailTableLogic notes = {this.state.notes} description = {this.props.description}/>);
    }
}
//need to find where description of page is coming from. thinking it is somewhere
//in jquery logic and/or the workspace router
ReactDOM.render(<GuitarTuning description = "Guitar tuner"/>,document.getElementById("root"));