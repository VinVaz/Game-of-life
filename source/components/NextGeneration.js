import React, {Component} from "react";
import Handler from "./Handler.js";

class NextGeneration extends Component{
	state={
		nextGeneration: [[], [], [], [], []]
	}
	showNextGeneration = () => {
		const {getNextGrid} = this.props;
		const {nextGeneration} = this.state;
		getNextGrid(nextGeneration);
	}
	updateGrid = (val, i, j) => {
		const {nextGeneration} = this.state;
			nextGeneration[i][j] = val;
	}
	calculateEach = () => {
		const {grid} = this.props;
		return grid.map((row, i) => {
		  return row.map((val, j) => {
			return <Handler state={val} jIndex={j} iIndex={i} updateGrid={this.updateGrid}/>
		  });	
		});
	}
	
	render(){
	  return(
        <div>
		  <button onClick={this.showNextGeneration} ></button>	
		  {this.calculateEach()}		  
	    </div>
	  );	
	}
} 

export default NextGeneration;