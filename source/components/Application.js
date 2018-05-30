import React, {Component} from "react";
import Grid from "./Grid.js";

const ApplicationStyle = {
	margin: "0px",
	padding: "0px"
}

class Application extends Component{
	
	render(){
	  return(
        <div style={ApplicationStyle}>
          <Grid/>		
	    </div>
	  );	
	}
} 

export default Application;