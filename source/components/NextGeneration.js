import React, {Component} from "react";
import Handler from "./Handler.js";

const grid = [0, 1, 0];

class NextGeneration extends Component{
	state={
		nextGeneration: []
	}
	activateNextGeneration = () => {
		const {getNextGrid} = this.props;
		const {nextGeneration} = this.state;
		getNextGrid(nextGeneration);
	}
	updateGrid = (val, index) => {
		const {nextGeneration} = this.state;
		nextGeneration[index] = val;
		setState({
			nextGeneration: nextGeneration
		});
	}
	calculateEach = () => {
		return grid.map((val, index) => {
			return <Handler state={val} index={index} updateGrid={this.updateGrid}/>
		})
	}
	
	render(){
	  //const {grid} = this.props;
	  return(
        <div>
		  <button onClick={this.activateNextGeneration} ></button>		
	    </div>
	  );	
	}
} 

export default NextGeneration;