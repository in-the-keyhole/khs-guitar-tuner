import {jqueary} from "./libs/jquery-1.7.2.js";

const img = null;
const stringPlaying = -1;

$(document).ready(function() {
		
	    img = new Image();
		img.src = "fret2.jpg";
		img.onload = fretImageLoaded;

    });
    
class GuitarTuning extends React.Component{
    constructor(props){
        super(props);
        this.fretImageLoad = this.fretImageLoad.bind(this);
        this.stringLabel = this.stringLabel.bind(this);
        this.playAll = this.playAll.bind(this);
        this.playString = this.playString.bind(this);
    }

    fretImageLoad(){
        let canvas = $("#canvas")[0];
        let ctx = canvas.getContext("2d");
        let ratio = 1.0;

        let imgWidth = img.width *ratio;
        let imgHeigth = img.height * ratio;
        ctx.canvas.width = imgWidth;
        ctx.canvas.height=imgHeight;
        ctx.drawImage(img,0,0,imgWidth,imgHeight);
        
        ctx.font = "bold 32px Arial";

        let notes = "<%notes%>";
        let list = notes.split(",");

        let strings = [26,63,102,138,174,212];

        for(let i = 0; i < strings.length; i++){
            let x = strings[i]-9;
            let y = 150 - 32;
            ctx.fillStyle = "green";
            
            stringLabel(list[i].toUpperCase(),strings[i],"white",ctx);
        }
        
        
        $("#canvas").click(function(e) {
	 	         var offsetX = e.pageX - $(this).position().left;
	 	         var offsetY = e.pageY - $(this).position().top;
	 	         
	 	         for (i = 0;i < list.length;i=i+1) {  
	 	            var point = strings[i];   	
	 	        	if (offsetX >= point-5 && offsetX <= point + 20 ) {
	 	        		
	 	        		if (stringPlaying == i) {
	 	        		 stringLabel(list[i].toUpperCase(),strings[i],"white",ctx);		
	 	        		 stopPlay(stringPlaying);
	 	        		 stringPlaying = -1;
	 	        		} else {
	 	        		    if (stringPlaying >=0 ) {
	 	        			 stringLabel(list[stringPlaying].toUpperCase(),strings[stringPlaying],"white",ctx);		
		 	        		 stopPlay(stringPlaying);
	 	        		    }
	 	        			stringLabel(list[i].toUpperCase(),strings[i],"red",ctx);
	 	        			playString(i);
	 	        		 
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
		   playString(i);
		   
	   }
    }

    playString(s){
        let id = "#audio"+s;
	   let a = $(id)[0];
	   a.play();
	   stringPlaying = s;
    }

    stopPlay(s){
        let id = "#audio"+s;
	   let a = $(id)[0];
	   a.pause();
    }

   
    render(){
      /*  return(
            //return a DetailImageViewLogic component?
        ); */

    }
}