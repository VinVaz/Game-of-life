import React, {Component} from "react";
import Row from "./Row.js";

const GridStyle = {
	backgroundColor: "#000",
	height: "300px",
	width: "300px",
    padding: "0.1px"
}

const gridCells = [[1, 0, 0, 1], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]]

class Grid extends Component{	
	generateRows = (grid) => {
		return gridCells.map((row) => {
			return <Row rowOfCells={row}/>
		});
	}
	render(){
	  return(
        <div style={GridStyle}>
			{this.generateRows(gridCells)}		
	    </div>
	  );	
	}
} 

export default Grid;