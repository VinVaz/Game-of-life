import React, {Component} from "react";
import Handler from "./Handler.js";

class NextGeneration extends Component{
	state={
		nextGeneration: []
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
	sumOfNeighbours(i, j){
		const {grid} = this.props;

		  let sum = 0;
		  for(let x = -1; x < 2; x++){
			for(let y = -1; y < 2; y++){
				//it verifies if none of the indexes are less than zero 
				//or greater than the array's length 
				if(
				  ((i+x) >= 0 && (i+x) < grid.length )&&
				  ((j+y) >= 0 && (j+y) < grid[i].length)&&
                  (x!=0 || y!=0)				  
				){
				  sum += grid[i+x][j+y];
				}
		    } 
		  }
		 console.log([i,j,sum])
		return sum;
	}
	calculateEach = () => {
		const {grid} = this.props;
		const {nextGeneration} = this.state;
		return grid.map((row, i) => {
		  nextGeneration[i] = []
		  return row.map((val, j) => {
			return <Handler 
			  state={val} 
			  jIndex={j} 
			  iIndex={i} 
			  updateGrid={this.updateGrid}
			  sumOfNeighbours={this.sumOfNeighbours(i, j)}
			/>
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