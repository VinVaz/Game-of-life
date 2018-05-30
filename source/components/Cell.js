import React, {Component} from "react";

const AliveCellStyle = {
	backgroundColor: "#ababab",
	height: "100%",
	width: "100%"
}

class Cell extends Component{
	
	getCellContainerStyle = () => {
	  const {numberOfColumns} = this.props;
      const myWidth = (100 / numberOfColumns) + "%";	  
	  const containerStyle = {
	    height: "100%",
	    width: myWidth,
	    display: "inline-block"
	  }
		return containerStyle 
	}
	
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
        <div style={this.getCellContainerStyle()}>
			{this.setCellState()}
		</div>
	  );	
	}
} 
export default Cell;