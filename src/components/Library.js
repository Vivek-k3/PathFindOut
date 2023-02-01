import React ,{Component} from 'react'
import "./styles.css"
import { primaryNodes } from './Path';

export class Node extends Component {
    render() {
      const {
        col,
        end,
        start,
        row,
      } = this.props;
      const extraClassName = end ? 'node-end': start ? 'node-start': '';
  
      return (
        <div id={`node-${row}-${col}`} className={`node ${extraClassName}`}></div>
      );
    }
  }
  


export const CreateNode = (col, row) => {
    return {
      col,
      row,
      start: row === primaryNodes.sRow && col === primaryNodes.sCol,
      end: row === primaryNodes.eRow && col === primaryNodes.eCol,
      distance: Infinity,
      isVisited: false,
      previousNode: null,
    };
  };

  
  
  export const Grid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 54; col++) {
        currentRow.push(CreateNode(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
  };