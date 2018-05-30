import React, {Component} from "react";

const CellContainerStyle = {
	height: "100%",
	width: "25%",
	display: "inline-block"
}
const AliveCellStyle = {
	backgroundColor: "#ababab",
	height: "100%",
	width: "100%"
}

class Cell extends Component{
    setCellState = () => {
		const {state} = this.props;
		if(state){
		  return(
		    <div style={AliveCellStyle}></div>
		  );
		} else { 
		  return null;
		}
	}
	render(){
	  return(
        <div style={CellContainerStyle}>
			{this.setCellState()}
		</div>
	  );	
	}
} 
export default Cell;