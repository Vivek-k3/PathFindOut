import React ,{Component} from 'react'
import {Node,Grid} from './Library';
import { dijkstra, shortestPath } from './algo';
import { animateDijkstra } from './motion';
import "./styles.css";
import "./button.css";

export const primaryNodes= {
  "sRow":10,
  "sCol":10,
  "eRow":15,
  "eCol":20
}

export default class Path extends Component {
    constructor() {
      super();
      this.state = {
        grid: [],
        sRow : 0,
        sCol:0,
        eRow : 0,
        eCol:0,
      };
    //   this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
      const grid = Grid();
      this.setState({grid});
    }

    
  
  
  // handleChange(e) {
  //   this.setState({sRow: e.target.sRow,sCol:e.target.sCol,eRow: e.target.eRow,eCol:e.target.eCol});
  // }
  
    findPath() {
      console.log("here at vizual")
      const {grid} = this.state;
      const start = grid[this.state.sRow][primaryNodes.sCol];
      const end = grid[primaryNodes.eRow][primaryNodes.eCol];
      return animateDijkstra(dijkstra(grid, start, end), shortestPath(end));
    }
    
   refreshPage() {
      window.location.reload(false);
    }
  
   
   
    render() {
      const {grid} = this.state;
  
      return (
        <>
        <div className='form'>
          
          <h1>PathFindOut</h1>
          <form>
            {/* <input value={this.state.sRow} onChange={this.handleChange} type="text"/>
            <input value={this.state.sCol} onChange={this.handleChange}type="text"/>
            <br/>
            <input value={this.state.eRow} onChange={this.handleChange}type="text"/>
            <input value={this.state.eCol} onChange={this.handleChange}type="text"/>
            <br/>  */}
            
          </form>
          <button className="cybr-btn" onClick={() => this.findPath()}>
        Find<span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">Find</span>
        <span aria-hidden className="cybr-btn__tag">R25</span>
        </button>
        <button class="cybr-btn" onClick={()=> this.refreshPage()}>
  Reset<span aria-hidden>_</span>
  <span aria-hidden class="cybr-btn__glitch">Reset</span>
  <span aria-hidden class="cybr-btn__tag">R25</span>
</button>
            
        </div>
          

          <div className="grid">
            {grid.map((row, rowIdx) => {
              return (
                <div key={rowIdx}>
                  {row.map((node, nodeIdx) => {
                    const {row, col, end, start} = node;
                    return (
                      <Node
                        key={nodeIdx}
                        col={col}
                        end={end}
                        start={start}
                        row={row}></Node>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      );
    };
  }