
export function dijkstra(grid, start, end) {
    const visited = [];
    start.distance = 0;
  
    const unvisited = [];
  
    for (const row of grid) {
      for (const node of row) {
        unvisited.push(node);
      }
    }
    
    while (!!unvisited.length) {
        unvisited.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
      const closestNode = unvisited.shift();
     

      if (closestNode.distance === Infinity) return visited;
      closestNode.isVisited = true;
      visited.push(closestNode);
      if (closestNode === end) return visited;
      unvisitedNode(closestNode, grid);
    }


  }
  
  
  
  function unvisitedNode(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }
  
  
  export function shortestPath(end) {
    const shortestPathsNodes = [];
    let currentNode = end;
    while (currentNode !== null) {
      shortestPathsNodes.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return shortestPathsNodes;
  }
  