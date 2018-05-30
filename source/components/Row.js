import React, {Component} from "react";
import Cell from "./Cell.js";

const RowStyle = {
	height: "25%",
	width: "100%",
	display: "block"
}

class Row extends Component{
	generateCells = () => {
	    const {rowOfCells} = this.props;
		return rowOfCells.map((cell) => {
			return <Cell state={cell}/>
		});
	}
	render(){
	  return(
        <div style={RowStyle}>
			{this.generateCells()}
		</div>
	  );	
	}
} 
export default Row;