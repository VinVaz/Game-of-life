import React, {Component} from "react";
import Grid from "./Grid.js";
import NextGeneration from "./NextGeneration.js";

const gridCells = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];

class Generation extends Component{
    state = {
		grid: gridCells
	}	
	render(){
	  const {grid} = this.state;
	  return(
        <div>
		  <NextGeneration/>
          <Grid grid={grid}/>		
	    </div>
	  );	
	}
} 

export default Generation;