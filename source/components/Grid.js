import React, {Component} from "react";
import Row from "./Row.js";

const GridStyle = {
	backgroundColor: "#000",
	height: "300px",
	width: "300px",
    padding: "0.1px"
}

const gridCells = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];

class Grid extends Component{	
	generateRows = (grid) => {
		return grid.map((row) => {
			return <Row 
			  rowOfCells={row}
			  numberOfRows={grid.length}
			/>
		});
	}
	render(){
	  const {grid} = this.props;
	  return(
        <div style={GridStyle}>
			{this.generateRows(grid)}		
	    </div>
	  );	
	}
} 

export default Grid;