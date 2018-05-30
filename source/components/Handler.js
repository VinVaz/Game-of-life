import React, {Component} from "react";

class Handler extends Component{

	render(){
        const {state, iIndex, jIndex, updateGrid} = this.props;
		let newState = 0;
	    if(state == 0) newState = 1;
	    else if(state == 1) newState = 0;
		updateGrid(newState, iIndex, jIndex);	
	  
	  return <div></div>;
	}
} 

export default Handler;