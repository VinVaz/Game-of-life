import React, {Component} from "react";
import Generation from "./Generation.js";

const ApplicationStyle = {
	margin: "0px",
	padding: "0px"
}

class Application extends Component{
	
	render(){
	  return(
        <div style={ApplicationStyle}>
          <Generation />		
	    </div>
	  );	
	}
} 

export default Application;